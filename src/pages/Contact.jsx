import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission logic here (e.g., send the form data to a server)

    // Clear the form fields after submission
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />

        <label>Message:</label>
        <textarea 
          name="message" 
          value={form.message} 
          onChange={handleChange} 
          required 
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
