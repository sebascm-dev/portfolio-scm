'use client'
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { projects } from './Projects'; // Asegúrate de que la ruta de importación sea correcta
import Image from 'next/image';


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
        number: clientsInView ? projects.length : 0,
        from: { number: 0 },
        config: { duration: 5000 },
    });

    const clientsAnimation = useSpring({
        number: clientsInView ? 1 : 0,
        from: { number: 0 },
        config: { duration: 5000 },
    });

    return (
        <div className='mx-auto max-w-[90%]'> {/* Añade margen automático y un ancho máximo */}
            <header className='mt-10 p-12 text-center'>
                <h1 className='text-4xl uppercase tracking-[10px] text-gray-500'>About</h1>
            </header>

            <div className='max-w-[100%] flex flex-row overflow-x-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#373737] w-[43.5%] mx-auto p-8 text-center rounded-md shadow-xl m-4'>
                    <a href="#projects">
                        <animated.div ref={projectsRef}>
                            <h2 className='text-lg text-[#F5B041] font-semibold'>Projects Completed</h2>
                            <animated.p className='text-4xl font-bold'>
                                <animated.span>
                                    {projectsAnimation.number.to((val: number) => `+${Math.floor(val)}`)}
                                </animated.span>
                            </animated.p>
                        </animated.div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#373737] w-[45.5%] mx-auto p-8 text-center rounded-md shadow-xl m-4'>
                    <animated.div ref={clientsRef}>
                        <h2 className='text-lg text-[#F5B041] font-semibold'>Satisfied Clients</h2>
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
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full md:w-4/10 flex items-start justify-center'>
                    <Image
                        className='rounded-full w-80 h-80 md:w-full md:h-auto md:max-h-[400px] md:rounded-md shadow-xl object-cover'
                        src="https://pbs.twimg.com/media/Fqj8QdkX0AA5J-L?format=jpg&name=large"
                        alt=""
                        width={400}
                        height={400}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#373737] p-5 rounded-md h-auto md:h-[400px] w-full md:w-6/10 flex-grow align-top shadow-xl border border-[#F5B041] '>
                    <p className='mb-2'>
                        A focused student in computer science and programming with experience as a mid-level IT technician and as a web developer. Passionate about acquiring skills in software development and emerging technologies. Constantly seeking opportunities to expand my knowledge in this field.
                    </p>
                    <p className='mb-5'>
                        I am a person who likes to learn new things, I am very curious and I like to investigate and learn about new technologies. I like to work in a team and I am a very responsible person.
                    </p>
                    <div className='flex justify-center'>
                        <a
                            href='https://drive.google.com/file/d/1zVO-8yaASu2UxUlDUNSAeXc-JlFF6mt2/view?usp=sharing'
                            download={true}
                            target='_blank'
                            className='bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center'>
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Cards Sobre Mi */}
            <h3 className='text-xl text-center uppercase tracking-[10px] text-gray-500'>
                Services
            </h3>
            <div className='p-4 md:p-0 flex flex-col md:flex-row flex-wrap justify-around m-4'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-colors duration-500'>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/9387/9387941.png"
                        className='w-16 h-16 mb-5'
                        width={64}
                        height={64}
                        alt=''
                    />
                    <h2 className='text-lg font-semibold'>Fullstack Developer</h2>
                    <p className='mb-4'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <h3 className='text-[#F5B041]'>Languages I speak:</h3>
                    <p className='mb-4'>HTML, CSS, JavaScript, TypeScript, PHP, etc...</p>
                    <h3 className='text-[#F5B041]'>Dev Tools:</h3>
                    <ul>
                        <li>VSCode</li>
                        <li>Github</li>
                        <li>Vercel</li>
                        <li>Netlify</li>
                        <li>Firebase</li>
                        <li>Terminal</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-colors duration-500'>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/4925/4925264.png"
                        className='w-16 h-16 mb-5'
                        width={64}
                        height={64}
                        alt=''
                    />
                    <h2 className='text-lg font-semibold'>Manager</h2>
                    <p className='mb-4'>I can handle server and network administration, as well as use different OS.</p>
                    <h3 className='text-[#F5B041]'>Experiences I draw from:</h3>
                    <p className='mb-4'>OS, Networking, Virtualization, Cybersecurity, Automations, etc...</p>
                    <h3 className='text-[#F5B041]'>Tools and Technologies:</h3>
                    <ul>
                        <li>Linux & Windows Server</li>
                        <li>VMware & VirtualBox</li>
                        <li>Routers & Switches</li>
                        <li>Protocols & Firewalls</li>
                        <li>Apache & Nginx</li>
                        <li>Databases & Active Directory</li>
                        <li>Others</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='bg-[#373737] w-full md:w-[30%] mx-auto p-5 text-center rounded-md shadow-xl flex flex-col items-center justify-start mb-4 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-colors duration-500'>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/128/4213/4213056.png"
                        className='w-16 h-16 mb-5'
                        width={64}
                        height={64}
                        alt=''
                    />
                    <h2 className='text-lg font-semibold'>Designer</h2>
                    <p className='mb-4'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    <h3 className='text-[#F5B041]'>Things I enjoy designing:</h3>
                    <p className='mb-4'>UX, UI, Web, Mobile, Apps, Logos</p>
                    <h3 className='text-[#F5B041]'>Design Tools:</h3>
                    <ul>
                        <li>Figma</li>
                        <li>WordPress</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>After Effects</li>
                        <li>Canva</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
