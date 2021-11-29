import React from 'react'
import styles from '../styles/Button.module.css';

export default function Buttons(props) {
    return (
        <button className={styles.btnDesign}>{props.content}</button>
    )
}
