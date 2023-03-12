const { createContext, useState } = require("react");
const { getDatabase, ref, set } = require('firebase/database');
const { app } = require('../../Firebase.config');

const ContactContext = createContext();

const ContactContextProvider = ({children}) => {

    // const db = getDatabase();
    const uuid = crypto.randomUUID();

    const [alert, setAlert] = useState({})
    const [contactFormInfo, setContactFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    let name, value;
    const handleContactChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setContactFormInfo({ ...contactFormInfo, [name]: value });
    }

    const handleSubmitContact = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, subject, message} = contactFormInfo;
        if (firstName && lastName && email && subject && message) {
            const res = fetch('https://artistic-communication-default-rtdb.asia-southeast1.firebasedatabase.app/contactForm.json', {
                method: "POST",
                body: JSON.stringify({
                    
                        firstName, 
                        lastName, 
                        email, 
                        subject, 
                        message
                    
                }),
                headers: {
                "Content-type": "application/json"
                }
            });
                    
            if (res) {
                setContactFormInfo({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setAlert({
                    success: true,
                    message: 'Your message deliver successfully.',
                    error: ''
                });
            }
            else{
                setAlert({
                    success: false,
                    message: '',
                    error: 'Something went wrong. Please try again.'
                })
            }
        }else{
            setAlert({
                success: false,
                message: '',
                error: 'Please fill up the forms with your info correctly.'
            })
        }
    }

    const contextValue = {
        alert,
        contactFormInfo,
        handleContactChange,
        handleSubmitContact,
    };

    return <ContactContext.Provider value={contextValue}>{children}</ContactContext.Provider>
}

export { ContactContext, ContactContextProvider };