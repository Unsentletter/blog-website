import React from 'react';
import { Link } from 'gatsby';

import styles from './styles/header.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <ul className={styles.menuWrapper}>
            <li>
              <Link to="/contact-form/" className={styles.menuItem}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume/" className={styles.menuItem}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/fish-room/" className={styles.menuItem}>
                Fishroom
              </Link>
            </li>
            <li>
              <Link to="/tech-blog/" className={styles.menuItem}>
                Tech Blog
              </Link>
            </li>
            <li>
              <Link to="/about/" className={styles.menuItem}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.menuItem}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
