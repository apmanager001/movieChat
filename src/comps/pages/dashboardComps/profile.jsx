import React, {useState} from 'react'
import profile from '../../assets/profile.jpeg'
import styles from '../../css/profile.module.css'

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
return (
    <div className={styles.profileContainer}>
        <div className={styles.title}>
           <h2> Your Profile</h2>
        </div>
        <div className={`${styles.profile} ${styles.input}`}>
            <img src={profile} alt='Profile Image'/>
            <input
                type="file"
                id={styles.fileInput}
                onChange={handleFileChange}
                accept="image/*"
            />
        </div>
        <div className={`${styles.name} ${styles.input}`}>
            <input type='text' id={styles.name} placeholder='Name' />
            
        </div>
        <div className={`${styles.email} ${styles.input}`}>
            <input type='text' id={styles.email} placeholder='Email' />
            
        </div>
        <div className={`${styles.username} ${styles.input}`}>
            <input type='text' id={styles.username} placeholder='Username' />
            
        </div>
        <div className={`${styles.password} ${styles.input}`}>
            <input type='password' id={styles.password} placeholder='Password' />
        </div>
        <div className={`${styles.submitButton} ${styles.input}`}>
            <input type="submit" value="Submit" className={styles.accountButton} />
        </div>
        
    </div>
    
    
  )
}

export default Profile