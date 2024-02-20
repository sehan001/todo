import React from "react";
import styles from "./Footer.module.css";
function Footer({ a, b }) {
  return (
    <div className={styles.Footer}>
      <span>Completed Tasks:{a}</span>
      <br></br>
      <span>InComplete Tasks:{b}</span>
    </div>
  );
}

export default Footer;
