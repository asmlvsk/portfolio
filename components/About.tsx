import { motion } from 'framer-motion'
import React from 'react'
import Ticker from 'react-ticker';
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <section className={styles.about__body}>
            <motion.div
                className={styles.about__leftSide}>
                <div>ASMLVSK</div>
                <Ticker speed={14}>
                    {({ index }) => (
                        <>
                            <div>ASMLVSK</div>
                        </>
                    )}
                </Ticker>
                <div>ASMLVSK</div>
                <Ticker speed={6} direction={'toRight'}>
                    {({ index }) => (
                        <>
                            <div>ASMLVSK</div>
                        </>
                    )}
                </Ticker>
            </motion.div>
            <div className={styles.about__rightSide}>
                <div className={styles.about__rightSide_text}>
                &quot;Work and you&apos;ll get what you need; work harder and you&apos;ll get what you want.&quot;
                    Prabakaran Thirumalai
                </div>
            </div>
        </section>
    )
}
