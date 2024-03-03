'use client'
import React from 'react'
import Link from 'next/link'
import Orbit from './Orbit'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

type Props = {}

export default function Portada({ }: Props) {

    const [text] = useTypewriter({
        words: ['<Web Developer />', '<Frontend Developer />', '<Backend Developer />', '<Fullstack Developer />'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 1000,
    })

    return (
        <div className='h-[90vh] flex flex-col justify-center items-center overflow-hidden'>
            <Orbit />
            <a target="_blank" href="https://github.com/sebascm-dev" className='img-perfil'>
                <motion.img
                    className='mb-5 rounded-full w-36'
                    style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))' }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    src="https://avatars.githubusercontent.com/u/43911461?v=4"
                    alt=""
                />
            </a>
            <h1 className="text-2xl z-40">Hi, I&apos;m <span className="text-[#F5B041] animate-pulse">Sebastián Contreras Marín</span></h1>
            <div>
                <span className='z-40'>{text}</span>
                <Cursor cursorColor='white' />
            </div>
            <div className='mt-5 z-40'>
                <Link href="#about">
                    <button className='portButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='portButton'>Experience</button>
                </Link>
                <Link href="https://primer-blog-astro.vercel.app/">
                    <button className='portButton'>Blog</button>
                </Link>
                <Link href="#projects">
                    <button className='portButton'>Projects</button>
                </Link>
            </div>
        </div>
    )
}
