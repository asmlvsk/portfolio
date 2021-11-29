import React, {useState, useEffect} from 'react';
import About from '../components/About';
import Choice from '../components/Choice';
import Socials from '../components/Socials/Socials';
import Buttons from '../components/Buttons';

import styles from '../styles/index.module.css';
import cx from 'classnames';
import { LazyMotion, motion } from 'framer-motion';
import {fadeIn} from '../variants';

export async function getServerSideProps(context) {
  let res = await fetch(process.env.PROD_URL + "/api/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let projects = await res.json();
  
  return {
      props: { projects },
  };
}

export default function Home({projects}) {

  const [projectsState, setProjectsState] = useState([]);
  useEffect(() => {
      setProjectsState(projects.data);
    }, [projects.data]);

  return (
    <motion.div 
    exit={{opacity: 0.5}}
    initial="initial"
    animate="animate"
    >
      <section className={styles.main}>
        <div className={cx(styles.content, styles.white)}>
          <motion.div 
          variants={fadeIn('up')}
          initial="initial"
          animate="animate"
          className={styles.main__textBlock}>
            <h1>Hi, I&apos;m Artem</h1>
            <h4>fullstack is my passion</h4>
          </motion.div>

        </div>
        <div className={cx(styles.content, styles.black)}>
          <motion.div
          variants={fadeIn('down')}
          initial="initial"
          animate="animate"
          className={styles.main__textBlock}>
            <h1>Hi, I&apos;m Artem</h1>
            <h4>fullstack is my passion</h4>
          </motion.div>
        </div> 
        <motion.div
          variants={fadeIn('down')}
          initial="initial"
          animate="animate" 
          className={styles.main__socials}>
          <Socials/>
        </motion.div>  
      </section> 
      <About/>
      <Choice/>

      {projectsState.map((project, index) =>{
        return(
          <div className={styles.projects__body} key={index} >
            <div className={styles.projects__main}>
              <div className={styles.projects__titles}>
                <div className={styles.projects__title}>{project.title}</div>
                <div className={styles.projects__suptitle}>{project.supTitle}</div>
              </div>
              <div className={styles.projects__buttons}>
                <a href={project.githubBtn} rel="noopener noreferrer" target="_blank"><Buttons content="Github"/></a>
                <a href={project.demoBtn} rel="noopener noreferrer" target="_blank"><Buttons content="Demo"/></a>
              </div>
            </div>
            <img src={project.imageLink} className={styles.projects__pic}></img>
        </div>
          );

      })}

    </motion.div>
  )
}
