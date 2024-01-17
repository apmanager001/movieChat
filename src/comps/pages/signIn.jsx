import React from 'react'
import styles from '../css/signIn.module.css'
import Header from '../header'
import Footer from '../footer'

const SignIn = () => {
  return (
    
    <>
    <Header />
    
    <div className={styles.signInContainer}>
    
      <div className={styles.formContainer}>
        <form>
          <h1>Create Account</h1>
        </form>

      </div>
    
    
    
    
    </div>

    <Footer />
    </>
  )
}

export default SignIn