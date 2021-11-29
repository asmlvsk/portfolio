import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" = "up") : Variants=>{
    return{
        initial:{
            y: direction==="up" ? 40 : -30,
            opacity: 0
        },
        animate:{
            y: 0,
            opacity: 1,
    
            transition:{
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }
};

export const socialIconsContainer: Variants = {
    initial: {},
    animate:{
        transition:{
            staggerChildren: 0.2,
            delayChildren: 1
        }
    }
}

export const socialIconsWrapper: Variants = {
    initial: {
        y: -900
    },
    animate:{
        y: 0,
        transition:{
            duration: 0.4,
            type: "spring"
        }
    }
}

export const icon: Variants = {
    initial: {},
    animate: (i:number)=> ({
        y: [20, 0, 20],
        transition:{
            delay: 2,
            duration: 1 * i,
            ease: "linear",
            repeat: Infinity
        }
    })
}