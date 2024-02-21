import React, {useState, useEffect} from 'react'
import profile from '../../assets/profile.jpeg'
import styles from '../../css/profile.module.css'

const Profile = () => {

    const loading = "Loading ..."

    const [selectedFile, setSelectedFile] = useState(null);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);

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
      <input type="text" id={styles.name} placeholder={name ? name : loading} />
    </div>
    <div className={`${styles.email} ${styles.input}`}>
      <input
        type="text"
        id={styles.email}
        placeholder={email ? email : loading}
      />
    </div>
    <div className={`${styles.username} ${styles.input}`}>
      <input
        type="text"
        id={styles.username}
        placeholder={username ? username : loading}
      />
    </div>
    <div className={`${styles.password} ${styles.input}`}>
      <input type="password" id={styles.password} placeholder="Password" />
    </div>
    <div className={`${styles.submitButton} ${styles.input}`}>
      <input type="submit" value="Submit" className={styles.accountButton} />
    </div>
  </div>
);
}

export default Profile