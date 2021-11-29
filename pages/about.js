import React from 'react'
import styles from '../styles/AboutPage/AboutPage.module.css'
import Buttons from '../components/Buttons'
import { motion } from 'framer-motion';

export default function about() {
    return (
        <motion.div 
        exit={{opacity: 0}} 
            initial="initial"
    animate="animate"
        className={styles.about__body}>
            <div className={styles.about__container}>

                <div className={styles.about__motiv}>
                    <div className={styles.about__title}>Motivation</div>
                    <div className={styles.about__motivBody}>
                        <h2>Multitasking</h2>
                        <h4>
                            I combine design capabilities
                            and
                            an interest in
                            exploring new technologies
                            for maximum results.
                        </h4>
                        <h2>Uniqueness</h2>
                        <h4>
                            Not only default patterns!
                            I&apos;m ready to make something interesting and unique.
                            In my design ideas, I try to make my work unique and I want to convey this desire to all my projects.
                        </h4>
                        <h2>Simplicity</h2>
                        <h4>                            
                            A clean and beautiful design with only the necessary functions is the key to the success of every site.
                            Make it easier...cause most of us are lazy !
                        </h4>
                        <h2>Problem solver</h2>
                        <h4>
                            One of my goals is to help people solve their problems. 
                            In our time, we are not confused and want everything at once without unnecessary things. 
                            Therefore, I try to simplify my projects as much as possible and at the same time try to make them as beautiful and effective as possible.
                        </h4>
                    </div>
                </div>

                <div className={styles.about__info}>
                    <div className={styles.about__title}>Personal Info</div>
                    <div className={styles.about__infoBody}>
                        <span>Email:</span><h4>smoilovskyi151@gmail.com</h4>
                        <span>Phone:</span><h4>+48 732 560 371</h4>
                        <span>Date of birth:</span><h4>18.11.1998</h4>
                        <span>Adress:</span><h4>Wrocław</h4>
                    </div>
                </div>

                <div className={styles.about__skills}>
                    <div className={styles.about__title}>Skills</div>
                    <div className={styles.about__skillsBody}>
                        <h4>C#</h4>
                        <h4>.NET (ASP .NET Core)</h4>
                        <h4>Blazor</h4>
                        <h4>Entity Framework</h4>
                        <h4>JavaScript</h4>
                        <h4>React</h4>
                        <h4>NodeJS</h4>
                        <h4>NextJS</h4>
                        <h4>HTML5+CSS3</h4>
                        <h4>MongoDB</h4>
                    </div>
                </div>

                <div className={styles.about__edu}>
                    <div className={styles.about__title}>Education</div>
                    <div className={styles.about__eduBody}>
                        <div className={styles.about__eduBody_place}>
                            <h2>Kyiv College of computer science and information technologies</h2>
                            <h4>Information Technologies</h4>
                            <h4>Software Development</h4>
                            <h4>Junior specialist</h4>
                            <h4>09.2015 – 07.2018</h4>
                        </div>
                        <div className={styles.about__line}></div>
                        <div className={styles.about__eduBody_place}>
                            <h2>Wyższa Szkoła Bankowa we Wrocławiu</h2>
                            <h4>Informatyka</h4>
                            <h4>Programowanie aplikacji w chmurze</h4>
                            <h4>Licencjat</h4>
                            <h4>10.2018 – 10.2021</h4>
                        </div>
                    </div>
                </div>

                <div className={styles.about__langs}>
                    <div className={styles.about__title}>Languages</div>
                    <div className={styles.about__langsBody}>
                        <h4>English:</h4><span>B2</span>
                        <div className={styles.about__line}></div>
                        <h4>Polish:</h4><span>B2</span>
                        <div className={styles.about__line}></div>
                        <h4>Russian:</h4><span>Native</span>
                        <div className={styles.about__line}></div>
                        <h4>Ukrainian:</h4><span>Native</span>
                        <div className={styles.about__line}></div>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}
