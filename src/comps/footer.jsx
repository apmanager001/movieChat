import { Link } from 'react-router-dom';
import styles from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
<<<<<<< HEAD
        <div className={styles.columnOne}>
          <ul>
            <li className={styles.footerItem}> F.A.Q </li>
            <li className={styles.footerItem}> Legal</li>
          </ul>
        </div>
        <div className={styles.columnTwo}>
          <ul>
            <li className={styles.footerItem}>Help</li>
            <Link to='/contact'>
              <li className={styles.footerItem}>Contact</li>
            </Link>
            <Link to='/about'>
              <li className={styles.footerItem}>About</li>
            </Link>
          </ul>
        </div>
        <div className={styles.columnThree}>
          <ul>
            <Link to='/signIn'>
              <li className={styles.footerItem}>Account</li>
            </Link>
            <li className={styles.footerItem}>Movies</li>
            <li className={styles.footerItem}>Theater</li>
          </ul>
        </div>
      </div>
=======

      <div className={styles.columnOne}>
        <ul>
          <li className={styles.footerItem}> F.A.Q </li>
          <li className={styles.footerItem}> Legal</li>
        </ul>
      </div>
      <div className={styles.columnTwo}>
        <ul>
          <Link to='/help'><li className={styles.footerItem}>Help</li></Link>
          <Link to="/contact"><li className={styles.footerItem}>Contact</li></Link>
          <Link to="/about"><li className={styles.footerItem}>About</li></Link>
        </ul>
      </div>
      <div className={styles.columnThree}>
        <ul>
          <Link to='/signIn'><li className={styles.footerItem}>Account</li></Link>
          <Link to='/movies'><li className={styles.footerItem}>Movies</li></Link>
          <li className={styles.footerItem}>Theater</li>
        </ul>
      </div>
      
      </div>

>>>>>>> 19b6122afb123dc2535b03ce811a8253ab870999
    </div>
  );
};

export default Footer;
