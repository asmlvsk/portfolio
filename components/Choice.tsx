import React, { useCallback } from 'react'
import styles from '../styles/Choice.module.css'
import useEmblaCarousel from 'embla-carousel-react'

import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'

export default function Choice() {
    const [lEmblaRef, lEmblaApi] = useEmblaCarousel({loop:true, axis: 'y'});
    const [rEmblaRef, rEmblaApi] = useEmblaCarousel({loop:true, axis: 'y'});

    const leftScrollPrev = useCallback(() => {
        if (lEmblaApi) lEmblaApi.scrollPrev()
      }, [lEmblaApi])
    
      const leftScrollNext = useCallback(() => {
        if (lEmblaApi) lEmblaApi.scrollNext()
      }, [lEmblaApi])


      const rightScrollPrev = useCallback(() => {
        if (rEmblaApi) rEmblaApi.scrollPrev()
      }, [rEmblaApi])
    
      const rightScrollNext = useCallback(() => {
        if (rEmblaApi) rEmblaApi.scrollNext()
      }, [rEmblaApi])

    return (
        <section className={styles.choice__body}>
            <div className={styles.choice__leftSide}>

                <div onClick={leftScrollPrev}><AiOutlineArrowUp className={styles.choice__icon}/></div>
                
                <div className={styles.choice__carousel}>
                    <div className={styles.choice__carouselVP} ref={lEmblaRef}>
                        <div className={styles.choice__carousel_cont}>
                            <div className={styles.choice__text}>BACKEND</div>
                            <div className={styles.choice__text}>ASP.NET</div>
                            <div className={styles.choice__text}>NodeJS</div>
                            <div className={styles.choice__text}>MongoDB</div>
                            <div className={styles.choice__text}>Firebase</div>
                            <div className={styles.choice__text}>EF Core</div>
                        </div>
                    </div>
                </div>

                <div onClick={leftScrollNext}><AiOutlineArrowDown className={styles.choice__icon}/></div>

            </div>
            <div className={styles.choice__rightSide}>
                
                <div className={styles.choice__btn} onClick={rightScrollPrev}>
                    <AiOutlineArrowUp className={styles.choice__icon}/>
                </div>
                
                <div className={styles.choice__carousel}>
                    <div className={styles.choice__carouselVP} ref={rEmblaRef}>
                        <div className={styles.choice__carousel_cont}>
                            <div className={styles.choice__text}>FRONTEND</div>
                            <div className={styles.choice__text}>HTML5+CSS3</div>
                            <div className={styles.choice__text}>React</div>
                            <div className={styles.choice__text}>NextJS</div>
                            <div className={styles.choice__text}>Blazor</div>
                        </div>
                    </div>
                </div>

                <div className={styles.choice__btn} onClick={rightScrollNext}>
                    <AiOutlineArrowDown className={styles.choice__icon}/>
                </div>
            </div>
        </section>
    )
}
