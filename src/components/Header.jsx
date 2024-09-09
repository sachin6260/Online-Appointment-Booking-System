import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <span style={styles.logoText}>BookItNow</span>
      </div>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.li}><Link to="/admin" style={styles.link}>Admin Panel</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#e82c2a',
    color: '#ffffff',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
     marginRight: '10px',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  li: {
    margin: '0 1rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Header;
