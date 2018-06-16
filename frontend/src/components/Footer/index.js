import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


class Footer extends React.Component {
    static contextTypes={
        t:PropTypes.func.isRequired
    }
    render(){
        console.log(this.context)
        return (
            <footer className={styles.footer}>
                <div className={styles.column}>
                    <nav>
                        <ul className={styles.footerNav}>
                            <li>{this.context.t("About us")}</li>
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
    }
}

export default Footer;