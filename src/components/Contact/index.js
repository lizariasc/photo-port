import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {

        setFormState({...formState, [e.target.name]: e.target.value })

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              } } else {
                  // handle the message and name form elements with an else clause of the parent conditional statement that targeted the email form element
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
              console.log('errorMessage', errorMessage);

              // Conditional statement that only allows the state to update with the user input if there is no error message
              if (!errorMessage) {
                setFormState({ ...formState, [e.target.name]: e.target.value });
              }
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }


    return (
        <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
            <div>
            <p className="error-text">{errorMessage}</p>
          </div>
          )}

            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
        );
    
    }
   
    
    export default ContactForm;
    