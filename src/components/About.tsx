'use client'
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type Props = {};

export default function About({ }: Props) {
    const [projectsRef, projectsInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [clientsRef, clientsInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const projectsAnimation = useSpring({
        number: projectsInView ? 10 : 0,
        from: { number: 0 },
        config: { duration: 5000 },
    });

    const clientsAnimation = useSpring({
        number: clientsInView ? 15 : 0,
        from: { number: 0 },
        config: { duration: 5000 },
    });

    return (
        <div className='h-screen mx-auto max-w-[90%]'> {/* Añade margen automático y un ancho máximo */}
            <header className='mt-10 p-12 text-center'>
                <h1 className='text-4xl uppercase tracking-[10px] text-gray-500'>About</h1>
            </header>

            <div className='max-w-[100%] flex flex-row overflow-x-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#F5B041] w-[43.5%] mx-auto p-8 text-center rounded-md shadow-xl m-4'>
                    <animated.div ref={projectsRef}>
                        <h2 className='text-lg font-semibold'>Number Projects</h2>
                        <animated.p className='text-4xl font-bold'>
                            <animated.span>
                                {projectsAnimation.number.to((val: number) => `+${Math.floor(val)}`)}
                            </animated.span>
                        </animated.p>
                    </animated.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#F5B041] w-[45.5%] mx-auto p-8 text-center rounded-md shadow-xl m-4'>
                    <animated.div ref={clientsRef}>
                        <h2 className='text-lg font-semibold'>Number Clients</h2>
                        <animated.p className='text-4xl font-bold'>
                            <animated.span>
                                {clientsAnimation.number.to((val: number) => `+${Math.floor(val)}`)}
                            </animated.span>
                        </animated.p>
                    </animated.div>
                </motion.div>
            </div>

            <div className='p-8 gap-5 flex flex-col md:flex-row justify-start items-center md:max-h-[600px] h-auto'>
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full md:w-4/10 flex items-start justify-center'>
                    <img
                        className='rounded-full w-80 h-80 md:w-full md:h-auto md:max-h-[400px] md:rounded-md shadow-xl object-cover'
                        src="https://pbs.twimg.com/media/Fqj8QdkX0AA5J-L?format=jpg&name=large"
                        alt=""
                    />
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-[#373737] p-5 rounded-md h-auto md:h-[400px] w-full md:w-6/10 flex-grow align-top shadow-xl border border-[#F5B041] '>
                    <p className='mb-5'>
                        Soy un estudiante comprometido con el campo de la informática. Durante mis períodos de disponibilidad, principalmente durante los veranos, he obtenido experiencia laboral en diversos roles, incluyendo socorrista, camarero y técnico informático de nivel medio, entre otros. Me caracterizo por ser entusiasta, trabajador y poseer una actitud proactiva para adquirir nuevos conocimientos según sea necesario.
                    </p>
                    <div className='flex justify-center'>
                        <a 
                        href='https://drive.google.com/file/d/1b3NO9PKWeJi7zVRg6CHj8xZbt9-6Dzj9/view?usp=drive_link'
                        download={true}
                        target='_blank'
                        className='bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center'>
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Cards Sobre Mi */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='p-4 md:p-0 flex flex-col md:flex-row flex-wrap justify-around m-4'>
                <div className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-all duration-500'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4213/4213056.png"
                        className='w-16 h-16 mb-5'
                    />
                    <h2 className='text-lg font-semibold'>Designer</h2>
                    <p className='mb-4'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <h3 className='text-[#F5B041]'>Things I enjoy designing:</h3>
                    <p className='mb-4'>UX, UI, Web, Mobile, Apps, Logos</p>
                    <h3 className='text-[#F5B041]'>Design Tools:</h3>
                    <ul>
                        <li>Figma</li>
                        <li>Adobe XD</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                    </ul>
                </div>
                <div className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-all duration-500'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/9387/9387941.png"
                        className='w-16 h-16 mb-5'
                    />
                    <h2 className='text-lg font-semibold'>Frontend Developer</h2>
                    <p className='mb-4'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <h3 className='text-[#F5B041]'>Languages I speak:</h3>
                    <p className='mb-4'>HTML, Pug, Slim, CSS, Sass, Git</p>
                    <h3 className='text-[#F5B041]'>Dev Tools:</h3>
                    <ul>
                        <li>Atom</li>
                        <li>Bitbucket</li>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Codekit</li>
                        <li>Github</li>
                        <li>Surge</li>
                        <li>Terminal</li>
                        <li>Vercel</li>
                    </ul>
                </div>
                <div className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-all duration-500'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4925/4925264.png"
                        className='w-16 h-16 mb-5'
                    />
                    <h2 className='text-lg font-semibold'>Student</h2>
                    <p className='mb-4'>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                    <h3 className='text-[#F5B041]'>Experiences I draw from:</h3>
                    <p className='mb-4'>UX/UI, Product design, Freelancing</p>
                    <h3 className='text-[#F5B041]'>Mentor Stats:</h3>
                    <ul>
                        <li>7 years of experience</li>
                        <li>26 short courses</li>
                        <li>65 bootcamps</li>
                        <li>Over 200 students</li>
                        <li>Over 2,350 mentor sessions</li>
                        <li>Over 60 group critiques</li>
                        <li>Over 16,500 comments</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    );
}
