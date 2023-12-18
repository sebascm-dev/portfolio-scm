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
                    url="https://github.com/sebascm-dev"
                    bgColor='transparent'
                    fgColor='gray'
                    target='_blank'
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/sebascm/"
                    bgColor='transparent'
                    fgColor='gray'
                    target='_blank'
                />
                <SocialIcon
                    url="https://www.instagram.com/_sebascm_/"
                    bgColor='transparent'
                    fgColor='gray'
                    target='_blank'
                />
                <SocialIcon
                    url="https://twitter.com/_sebascm_"
                    bgColor='transparent'
                    fgColor='gray'
                    target='_blank'
                />
            </motion.div>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))' }}
                className='flex flex-row items-center mt-4 mr-4 text-gray-300'>
                <a href="#contact">
                    <svg fill="#808080" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.001 330.001" stroke="#808080"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_348_"> <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602 L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"></path> <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 "></polygon> </g> </g></svg>
                </a>
            </motion.div>
        </header>
    )
}