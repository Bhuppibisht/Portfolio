import Image from 'next/image'
import React from 'react'

import { BackgroundGradient } from './ui/background-gradient';

import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube, } from '@tabler/icons-react';
import Link from 'next/link';



const words = ["Full Stack Developer", "Building scalable applications","turning abstract ideas into working prototypes" ];

const handles = [
    {
        href: "https://github.com/Bhuppibisht",
        icon: <IconBrandGithub className="h-7 w-7 " />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full  px-6 py-3 font-medium  dark:hover:bg-white transition-all text-neutral-700 dark:text-neutral-200 dark:hover:text-black  duration-200 hover:bg-neutral-900 hover:text-white",
    },
    {
        href: "https://www.linkedin.com/in/bhupendrasingh05/",
        icon: <IconBrandLinkedin className="h-7 w-7 " />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full  px-6 py-3 font-medium   dark:hover:bg-blue-500 transition-all duration-200 text-blue-600 dark:text-blue-400 dark:hover:text-white hover:bg-blue-500 hover:text-white",
    },
    {
        href: "https://x.com/Bhuppibisht05/",
        icon: <IconBrandX className="h-7 w-7 " />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full  px-6 py-3 font-medium   dark:hover:bg-white transition-all duration-200 text-black dark:text-white dark:hover:text-black hover:bg-black hover:text-white",
    },
   
    {
        href: "https://discord.gg/Cjna68Pk",
        icon: <IconBrandDiscord className="h-7 w-7 " />,
        className: "group/btn shadow-input relative flex h-10 items-center justify-start rounded-full  px-6 py-3 font-medium   dark:hover:bg-purple transition-all duration-200 text-purple dark:text-purple-400 dark:hover:text-white hover:bg-purple-500/70 hover:text-white",
    },
    
]

const Hero = () => {
    return (
        <section className="w-full xl:h-[80vh] mt-20 xl:mt-52 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-52 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left: Text Content */}
                <div className="text-center  h-1/2 md:text-left flex flex-col gap-4 text-neutral-500 font-semibold text-3xl sm:text-3xl md:text-4xl  dark:text-neutral-400 mb-4 md:mb-0">
                    <span className="flex items-center justify-center md:justify-start gap-2">
                        👋🏻Hi, I&apos;m
                        <span className="dark:text-orange-500 text-orange-400 font-extrabold">
                            Bhupendra singh
                        </span>
                    </span>
                    
                    <span className="flex gap-2 items-center justify-center md:justify-start ">
                           a  &nbsp;
                           <span className="dark:text-orange-500 text-orange-400 font-extrabold">
                            Software Engineer
                        </span>
                       </span>
                       
                    from India.
                    <div className="flex gap-2 mb-20 md:mb-0 p-2 mt-10 justify-center md:justify-normal">
                        {
                            handles.map((handle, idx) => (
                                <Link
                                    key={`handle-link-${idx}`}
                                    href={handle.href}
                                    target="_blank"
                                    className={handle.className}
                                    type="submit"
                                >
                                    {handle.icon}
                                </Link>
                            ))
                        }
                        
                    </div>
                </div>


               <div className="flex justify-center md:justify-end">
  <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-lg">
    <BackgroundGradient className="absolute inset-0" />
  
  </div>
</div>
            </div>
        </section>
    )
}

export default Hero