import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
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
  faFilm,
  faCat,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./sidebar.module.css";

const Sidebars = () => {
  const [toggled, setToggled] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar
      backgroundColor="#000"
      className={styles.sidebar}
      collapsed={collapsed}
      //collapsedWidth="80px"
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      breakPoint="all"
      style={{
        border: "none",
        borderWidth: 0,
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
        height: "100vh",
        position: "fixed",
      }}
      rootStyles={{
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      }}
    >
      {collapsed ? (
        <FontAwesomeIcon
          className={styles.arrowIcon}
          icon={faArrowRight}
          onClick={() => setCollapsed(false)}
        />
      ) : (
        <FontAwesomeIcon
          className={styles.arrowIcon}
          icon={faArrowLeft}
          onClick={() => setCollapsed(true)}
        />
      )}
      <div className={styles.title}>
        <FontAwesomeIcon icon={faCat} />
        <p>Movie Chat</p>
      </div>

      <Menu className={styles.menu}>
        <MenuItem
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faHome} />}
          component={<Link to="/" />}
        >
          Home
        </MenuItem>
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
            Settings
          </MenuItem>
        </SubMenu>
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
          component={<Link to="/test" />}
          icon={<FontAwesomeIcon className={styles.mainIcon} icon={faFilm} />}
        >
          {" "}
          Test
        </MenuItem>

        <MenuItem
          icon={
            <FontAwesomeIcon className={styles.mainIcon} icon={faMessage} />
          }
          component={<Link to="/contact" />}
        >
          Contact
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidebars;
