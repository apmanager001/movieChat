import React, {useState} from 'react'
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
  faArrowRight,
  faArrowLeft,
  faCat
} from "@fortawesome/free-solid-svg-icons";
import styles from './sidebar.module.css'

const Sidebars = () => {
  const [toggled, setToggled] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sidebar
      className={styles.sidebar}
      onBackdropClick={() => setToggled(false)}
      collapsed={collapsed}
      collapsedWidth="80px"
      toggled={toggled}
      breakPoint="always"
    >
      {collapsed ? (
        <FontAwesomeIcon
          className={styles.arrowIcon}
          icon={faArrowRight}
          onClick={() => setCollapsed(!collapsed)}
        />
      ) : (
        <FontAwesomeIcon
          className={styles.arrowIcon}
          icon={faArrowLeft}
          onClick={() => setCollapsed(!collapsed)}
        />
      )}
      <div className={styles.title}>
        <FontAwesomeIcon icon={faCat} />
        <p>Movie Chat</p>
      </div>

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
          icon={
            <FontAwesomeIcon className={styles.mainIcon} icon={faMessage} />
          }
          component={<Link to="/contact" />}
        >
          {" "}
          Contact
        </MenuItem>
        <MenuItem component={<Link to="/test" />}> Test</MenuItem>
        <SubMenu
          label="Account"
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faUser} />}
        >
          <MenuItem
            className={styles.subMenuItem}
            icon={<FontAwesomeIcon className={styles.icon} icon={faUser} />}
            component={<Link to="/dashboard" />}
          >
            Profile{" "}
          </MenuItem>
          <MenuItem
            className={styles.subMenuItem}
            icon={<FontAwesomeIcon className={styles.icon} icon={faUsers} />}
            component={<Link to="/dashboard" />}
          >
            Friends{" "}
          </MenuItem>
          <MenuItem
            className={styles.subMenuItem}
            icon={<FontAwesomeIcon className={styles.icon} icon={faMessage} />}
            component={<Link to="/dashboard" />}
          >
            {" "}
            Chat{" "}
          </MenuItem>
          <MenuItem
            className={styles.subMenuItem}
            icon={<FontAwesomeIcon className={styles.icon} icon={faCalendar} />}
            component={<Link to="/dashboard" />}
          >
            Events{" "}
          </MenuItem>
          <MenuItem
            className={styles.subMenuItem}
            icon={
              <FontAwesomeIcon className={styles.icon} icon={faCertificate} />
            }
            component={<Link to="/dashboard" />}
          >
            {" "}
            Badges{" "}
          </MenuItem>
          <MenuItem
            className={styles.subMenuItem}
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



