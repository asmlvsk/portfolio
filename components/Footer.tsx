import React from 'react';
import styles from '../styles/Footer.module.css';
import Buttons from './Buttons';

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className={styles.footer__main}>
            <div className={styles.footer__body}>

                <div className={styles.footer__column}>
                    <div className={styles.footer__title}>ASMLVSK</div>
                    <div className={styles.footer__columnBodyTerms}>
                        <a href=""><h3>Terms of service</h3></a>
                        <a href=""><h3>Privacy Policy</h3></a>
                    </div>
                </div>

                <div className={styles.footer__column}>
                    <div className={styles.footer__title}>Get in Touch</div>
                    <div className={styles.footer__columnBodyGet}>                        
                        <a href="https://www.linkedin.com/in/artem-smoilovskyi-5082141ba/" rel="noopener noreferrer" target="_blank"><AiFillLinkedin/></a>
                        <a href="mailto:smoilovskyi151@gmail.com" rel="noopener noreferrer" target="_blank"><AiFillMail/></a>
                        <a href="https://github.com/asmlvsk/" rel="noopener noreferrer" target="_blank"><AiFillGithub/></a>
                    </div>
                </div>

                <div className={styles.footer__column}>
                    <div>© 2021 ASMLVSK</div>
                </div>

            </div>
        </footer>
    )
}
