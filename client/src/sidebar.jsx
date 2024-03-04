import { Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faUsers,
  faMessage,
  faCertificate,
  faCalendar,
  faVideo,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import styles from './sidebar.module.css'

const Sidebars = () => {
  return (
    <Sidebar className={styles.sidebar} rtl={true}>
      <Menu className={styles.menu}>
        <MenuItem
            className={styles.menuItem}
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faHome} />}
          component={<Link to="/" />}
        >
          Home
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faVideo} />}
          component={<Link to="/movies" />}
        >
          {" "}
          Movies
        </MenuItem>
        <MenuItem
          icon={
            <FontAwesomeIcon className={styles.mainIcon} icon={faCalendar} />
          }
          component={<Link to="/events" />}
        >
          {" "}
          Events
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faMessage} />}
          component={<Link to="/contact" />}
        >
          {" "}
          Contact
        </MenuItem>
        <MenuItem component={<Link to="/test" />}> Test</MenuItem>
        <SubMenu label="Account">
          <MenuItem
            icon={<FontAwesomeIcon className={styles.icon} icon={faUser} />}
            component={<Link to="/dashboard" />}
          >
            Profile{" "}
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon className={styles.icon} icon={faUsers} />}
            component={<Link to="/dashboard" />}
          >
            Friends{" "}
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon className={styles.icon} icon={faMessage} />}
            component={<Link to="/dashboard" />}
          >
            {" "}
            Chat{" "}
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon className={styles.icon} icon={faCalendar} />}
            component={<Link to="/dashboard" />}
          >
            Events{" "}
          </MenuItem>
          <MenuItem
            icon={
              <FontAwesomeIcon className={styles.icon} icon={faCertificate} />
            }
            component={<Link to="/dashboard" />}
          >
            {" "}
            Badges{" "}
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon className={styles.icon} icon={faGear} />}
            component={<Link to="/dashboard" />}
          >
            Settings{" "}
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default Sidebars



