import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let errors = {};
    switch(true) {
      case !name.trim():
        errors.name = 'Name is required';
        break;
      case !email.trim():
        errors.email = 'Email is required';
        break;
      case !/\S+@\S+\.\S+/.test(email):
        errors.email = 'Email is invalid';
        break;
      case !message.trim():
        errors.message = 'Message is required';
        break;
      default:
        // handle default case
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Submit the form or perform any desired action
      console.log('Form submitted!');
      // Reset form fields and errors
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
     <div className='row'>
        <div className='column'>
            <div className='label'> 
                <label htmlFor="name">Name</label>
            </div>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className='column'>
            <div className='label'> 
                <label htmlFor="email">Email</label>
            </div>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
        </div>
     </div>
      <div className='message'>
        <div className='label'> 
            <label htmlFor="message">Message</label>
        </div>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <div className="error">{errors.message}</div>}
      </div>
      <div className='submit-button'><button type="submit">Submit</button></div>
    </form>
    </div>
  );
};

export default ContactForm;