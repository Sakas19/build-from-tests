import React from 'react';
import styles from './header.module.css'; // Import the CSS module

function Header() {
  return (
    <div className={styles.Header}> {/* Use the generated class name */}
      <h1>Pokemon showdown</h1>
    </div>
  );
}

export default Header;
