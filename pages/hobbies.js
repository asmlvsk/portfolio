import React from 'react'
import styles from '../styles/Hobbies/Hobbies.module.css'
import { motion } from 'framer-motion';


export default function hobbies() {

    const images = [
        {id: 0, image: "https://i.imgur.com/7QGOYwK.jpg"},
        {id: 1, image: "https://i.imgur.com/WG1tUqd.png"},
        {id: 2, image: "https://i.imgur.com/0OoB7Ae.png"},
        {id: 3, image: "https://i.imgur.com/xksrgZK.png"},
        {id: 4, image: "https://i.imgur.com/LWjQOIG.jpg"},
        {id: 5, image: "https://i.imgur.com/fA5quu3.png"},
        {id: 6, image: "https://i.imgur.com/Q49aZxB.png"},
        {id: 7, image: "https://i.imgur.com/aVIdcrh.png"},
    ];

    return (
        <motion.div 
        exit={{opacity: 0}}
        initial="initial"
        animate="animate"
         className={styles.hob__body}>
            <div className={styles.hob__col}>
                <div className={styles.hob__imgs}>
                    {images.map(item =>(
                        <img key={item.id} className={styles.hob__img} src={item.image} alt="" />
                    ))}
            </div>

            </div>
        </motion.div>
    )
}
