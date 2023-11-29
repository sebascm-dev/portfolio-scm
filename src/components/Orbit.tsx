'use client'
import React, { useEffect, useRef } from 'react';

type Props = {};

export default function Orbit({ }: Props) {
    const planet1Ref = useRef<HTMLDivElement>(null);
    const planet2Ref = useRef<HTMLDivElement>(null);
    const planet3Ref = useRef<HTMLDivElement>(null);
    const planet4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animatePlanets = (planetRef: React.MutableRefObject<HTMLDivElement | null>, delay: number) => {
            if (planetRef.current) {
                setTimeout(() => {
                    planetRef.current.style.transform = 'translate(-50%, -50%) rotate(0deg) translateX(0) rotate(0deg)';
                }, delay);
            }
        };

        // Animate planets sequentially with delays
        animatePlanets(planet1Ref, 10);
        animatePlanets(planet2Ref, 10);
        animatePlanets(planet3Ref, 10);
        animatePlanets(planet4Ref, 10);
    }, []);

    return (
        <div className='relative flex justify-center items-center'>
            <div className='absolute border border-[#777777] rounded-full h-[200px] w-[200px] mt-36 animate-ping' />
            <div className='absolute border border-[#777777] rounded-full h-[350px] w-[350px] mt-36' />
            <div className='absolute border border-[#777777] rounded-full h-[500px] w-[500px] mt-36' />
            <div className='absolute border border-[#F5B041] rounded-full h-[650px] w-[650px] mt-36' />
            <div className='absolute border border-[#777777] rounded-full h-[800px] w-[800px] mt-36' />

            <div
                ref={planet1Ref}
                className='absolute h-[10px] w-[10px] mt-36'
                style={{
                    transition: 'transform 10s ease-in-out',
                    transform: 'translate(-50%, -50%) translateY(-50vh) rotate(0deg)',
                }}
            >
                <div className='planeta1' />
            </div>
            <div
                ref={planet2Ref}
                className='absolute h-[10px] w-[10px] mt-36'
                style={{
                    transition: 'transform 10s ease-in-out',
                    transform: 'translate(-50%, -50%) translateY(-50vh) rotate(0deg)',
                }}
            >
                <div className='planeta2' />
            </div>
            <div
                ref={planet3Ref}
                className='absolute h-[10px] w-[10px] mt-36'
                style={{
                    transition: 'transform 10s ease-in-out',
                    transform: 'translate(-50%, -50%) translateY(-50vh) rotate(0deg)',
                }}
            >
                <a target="_blank" href="https://earth.google.com/web/data=MkEKPwo9CiExMXB1aTNNWFFVRTdiR1JtMUl3ZmVBWmt4U0didEtSMGgSFgoUMDQxNDUwRDk5MzJENENFMTQ4MTQgAQ">
                    <div className='planeta3' />
                </a>
            </div>
            <div
                ref={planet4Ref}
                className='absolute h-[10px] w-[10px] mt-36'
                style={{
                    transition: 'transform 10s ease-in-out',
                    transform: 'translate(-50%, -50%) translateY(-50vh) rotate(0deg)',
                }}
            >
                <div className='planeta4' />
            </div>
        </div>
    );
}