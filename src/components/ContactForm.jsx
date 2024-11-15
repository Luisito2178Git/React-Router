import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form className='contact-form'>
        <label htmlFor="Name">Name:</label>
        <input type="text" name="" id="" placeholder='Name' />
        <br />
        <label htmlFor="Email">Email:</label>
        <input type="email" name="" id="" placeholder='Email'/>
        <br />
        <label htmlFor="Email">Message:</label>
        <textarea name="" id="" placeholder='message'></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm