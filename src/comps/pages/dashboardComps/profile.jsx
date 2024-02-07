import React, {useState, useEffect} from 'react'
import profile from '../../assets/profile.jpeg'
import styles from '../../css/profile.module.css'

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState("Loading...");
    const [email, setEmail] = useState("Loading...");
    const [username, setUsername] = useState("Loading...");

    const api = ""

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };




    useEffect(() => {
    fetch({api})
        .then((response) => response.json())
        .then((data) => {
            setName(data.name);
            setEmail(date.email);
            setUsername(data.username);
        });
    }, []);



return (
    <div className={styles.profileContainer}>
        <div className={`${styles.profile} ${styles.input}`}>
            
            <input
                type="file"
                id={styles.fileInput}
                onChange={handleFileChange}
                accept="image/*"
            />
        </div>
        <div className={`${styles.name} ${styles.input}`}>
            <input type='text' id={styles.name} placeholder={name} />
            
        </div>
        <div className={`${styles.email} ${styles.input}`}>
            <input type='text' id={styles.email} placeholder={email} />
            
        </div>
        <div className={`${styles.username} ${styles.input}`}>
            <input type='text' id={styles.username} placeholder={username} />
            
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