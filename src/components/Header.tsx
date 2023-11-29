'use client'
import React from 'react'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between z-20'>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))' }}
                className='flex flex-row items-center mt-2'>
                <SocialIcon
                    url="https://www.linkedin.com/in/sebastian-ramirez-9b0b0b1b5/"
                    bgColor='transparent'
                    fgColor='gray'
                />
                <SocialIcon
                    url=""
                    bgColor='transparent'
                    fgColor='gray'
                />
                <SocialIcon
                    url=""
                    bgColor='transparent'
                    fgColor='gray'
                />
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))' }}
                className='flex flex-row items-center mt-2 text-gray-300 cursor-pointer'>
                <SocialIcon
                    network='email'
                    bgColor='transparent'
                    fgColor='gray'
                />
            </motion.div>
        </header>
    )
}