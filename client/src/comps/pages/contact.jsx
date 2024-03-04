import React from 'react'

import styles from '../css/contact.module.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    
    

    <div className={styles.contactContainer}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
        
          <input type="text" placeholder='Name'id="name" name="name" required />

          
          <input type="email" placeholder='Email' id="email" name="email" required />

          
          <textarea id="message" placeholder='Message' name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
       </form>
      </div>
    </div>
    
    
    </>
  )
}

export default Contact