"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";



const HeroSection = () => {
    return (
        <section style={{marginBottom: "170px"}}>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-15 text-4xl sm:text-5xl lg:text-8xl sm:mb-12 lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900  to-blue-500">Hello, I&apos;m {" "}</span>
                        <TypeAnimation
                            sequence={[
                              // Same substring at the start will only be typed out once, initially
                              'Ayanda',
                              2000, // wait 1s before replacing "Mice" with "Hamsters"
                              'a Web Developer',
                              2000,
                              'a UI/UX Designer',
                              2000,
                            ]}
                            wrapper="span"
                            speed={15}
                            repeat={Infinity}
                            className="sm:mb-12"
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:mt-10 sm:mb-10 sm:text-lg  lg:text-xl" style={{marginTop: "50px", marginBottom: "50px", lineHeight: "2"}}>    
                        An ambitious and dynamic front end web developer, driven by a hunger for innovation and excellence. <br />
                        With a relentless passion for crafting seamless digital experiences, my dedication to mastering cutting-edge 
                        technologies ensures transformative solutions that captivate users and elevate businesses. <br />
                        Ready to infuse teams with boundless energy and expertise, I am poised to drive innovation and success 
                        in any project I participate in.
                    </p>
                    <div >
                        <a href="tel:+27814316527">
                            <button className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-900  to-blue-500 hover:bg-slate-200 text-white" >
                                Hire Me
                            </button> 
                        </a>
                        <a href="/images/Ayanda Vilakazi.pdf" download>
                            <button className="ml-2.5 mt-4 lg:ml-7 lg:mt-0 px-6 py-3 rounded-full mr-4  bg-transparent hover:bg-slate-800 text-white border border-blue-600">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-4 place-self-center mt-4 lg:mt-0"
                    >
                        <div className="sm:mt-10 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <Image
                                src="/images/memoji3.png"
                                alt="hero image"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={300}
                                height={300}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;