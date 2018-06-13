import React from 'react';
import styles from './styles.scss';

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav>
                <ul className={styles.footerNav}>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Blog</li>
                    <li>Press</li>
                    <li>API</li>
                    <li>Jobs</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Directory</li>
                    <li>Language</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}><span>2017 nomadgram</span></div>
    </footer>
)

export default Footer;