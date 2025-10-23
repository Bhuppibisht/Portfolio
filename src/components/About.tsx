import {  motion,useScroll, useTransform, useSpring,  } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React, {useRef} from 'react'
import TextGenerateEffect from './ui/text-generate-effect'

const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const translateContent = useSpring(useTransform(scrollYProgress, [0,1], [50, -50]), {
        stiffness: 120,
        damping: 24,
        mass: 0.8,
    })

    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0,1,0])

    return (
        <motion.section
        ref={ref}
        style={{opacity: opacityContent, y: translateContent}}
        id="about"
        className = "mx-auto rounded-lg flex flex flex-col gap-5 px-2 py-20 sm:px-10 md:px-20 lg:px-28"
       >

            <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
                About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-18 py-10">
                <div className="md:block hidden scale-125">
                    <DotLottieReact
                    src= "https://lottie.host/46ab6c13-c04f-4c3a-85b7-7422db5fe2ab/3rXet8qbCi.lottie"
                    loop
                    autoplay
                    />
                </div>
                <span className=" text-color-white font-sans w-full font-semibold text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
                   <TextGenerateEffect  text= "I'm a software engineer specializing in Full-Stack development, with a passion for building scalable applications that serve millions of users without compromising performance and solving real-world problems through clean and efficient code."
                   /> 
                   <br />
                   <TextGenerateEffect  text= "I work primarily with JavaScript and Typescript, and I enjoy architecting applications using React and Node.js, NextJs ."
                   />

                    <TextGenerateEffect  text= "I love turning abstract ideas into working prototypes, and I thrive in collaborative environments where learning never stops."
                    />

                </span>
            </div>
            </motion.section>
    )
}
export default About