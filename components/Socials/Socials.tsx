import React from 'react';
import styles from '../../styles/Socials.module.css'

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { icon, socialIconsContainer, socialIconsWrapper } from '../../variants';

function Socials() {
    return (
        <motion.div
            variants={socialIconsContainer}
            initial="initial"
            animate="animate"
            className={styles.socials}>
            <motion.a 
                className={styles.socIconG}
                variants={socialIconsWrapper} 
                href="https://github.com/asmlvsk/" 
                target="_blank">
                    <motion.div className={styles.icon__wrapper} custom={2.6} variants={icon}>
                        <AiFillGithub/>
                        <AiFillGithub className={styles.react_icon}/>
                    </motion.div>

            </motion.a>
            <motion.a 
                className={styles.socIconL} 
                variants={socialIconsWrapper} 
                href="https://www.linkedin.com/in/artem-smoilovskyi-5082141ba/" 
                target="_blank">
                    <motion.div className={styles.icon__wrapper} custom={2.8} variants={icon}>
                        <AiFillLinkedin/>
                        <AiFillLinkedin className={styles.react_icon}/>
                    </motion.div>
            </motion.a>
            <motion.a 
                className={styles.socIconM} 
                variants={socialIconsWrapper} 
                href="mailto:smoilovskyi151@gmail.com" 
                target="_blank">
                    <motion.div className={styles.icon__wrapper} custom={3} variants={icon}>
                        <AiFillMail/>
                        <AiFillMail className={styles.react_icon}/>     
                    </motion.div>
      
            </motion.a>
        </motion.div>
    )
}

export default Socials;
