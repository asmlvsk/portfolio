import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { fadeIn } from '../variants'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import cx from 'classnames';
import Link from 'next/link'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <motion.div 
            variants={fadeIn('down')}
            initial="initial"
            animate="animate"
            className={styles.nav__body}>

            <div className={styles.nav__logo}>
                <Link href="/"><a>A<span className={styles.nav__span}>Smlvsk</span></a></Link>
            </div>

            <div className={styles.nav__menuIcon} onClick={handleClick}>
                {!isOpen ? <GiHamburgerMenu/> : <AiOutlineClose/>}
            </div>

            <div className={isOpen ? cx(styles.nav__items, styles.active) : styles.nav__items}>
                <Link href="/about"><a className={styles.nav__item} >About</a></Link>
                <Link href="/projects"><a className={styles.nav__item} href="">Projects</a></Link>
                <Link href="/hobbies"><a className={styles.nav__item} href="">Hobbies</a></Link>
            </div>

        </motion.div>
    )
}
