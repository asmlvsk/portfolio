import React, {useState, useEffect} from 'react'
import styles from '../styles/ProjectsPage/ProjectsPage.module.css'
import { motion } from 'framer-motion';

export async function getServerSideProps(context) {

  let dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://asmoilovskyi.com';

    let res = await fetch(`${server}/api/projects`, {
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

export default function Projects({projects}) {

    const [projectsState, setProjectsState] = useState([]);
    useEffect(() => {
        setProjectsState(projects.data);
      }, [projects.data]);

    return (
        <motion.div 
        exit={{opacity: 0}}
        initial="initial"
        animate="animate"
         className={styles.projects__body}>
            <div className={styles.projects__container}>
                <div className={styles.projects__titleContainer}>
                    <div className={styles.projects__titleContainer_title}>
                        Main projects
                    </div>
                    <div className={styles.projects__titleContainer_supTitle}>
                        Here I have all my main projects and what I&apos;m going to do soon.
                    </div>
                </div>
                <div className={styles.projects__projectsContainer}>
                    {projectsState.map((project, index) =>{
                        
                        return(
                        <div className={styles.projects__projectsContainer_body} key={index}>
                            <div className={styles.projects__projectsContainer_title}>                               
                                {project.title}
                            </div>
                            <div className={styles.projects__projectsContainer_description}>
                                {project.description}
                            </div>
                            <div className={styles.projects__projectsContainer_line}></div>
                        </div>
                        );

                    })}
                </div>
            </div>
        </motion.div>
    )
}