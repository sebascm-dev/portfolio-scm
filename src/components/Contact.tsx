'use client'
import React, { useRef, RefObject, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type Props = {};

export default function Contact({ }: Props) {
    const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    'service_ag6ui9w',
                    'template_k3eisvb',
                    form.current,
                    '0HllEnYJkvTBxD4ux'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        console.log('Email sent successfully!');
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <div className='mx-auto max-w-[90%]'>
            <header className='mt-[5em] pt-12 mb-8 text-center'>
                <h1 className='text-4xl uppercase tracking-[10px] text-gray-500'>Contact</h1>
            </header>

            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-5">
                <form ref={form} onSubmit={sendEmail} className="p-10 h-[40em] mb-8 bg-[#373737] rounded-md shadow-md w-full sm:w-1/3 flex-grow">
                    <label className="block mb-2 text-sm font-bold">Name:</label>
                    <input type="text" name="user_name" minLength={10} required className="w-full px-3 py-2 mb-3 text-sm leading-tight focus:ring-2 focus:ring-[#F5B041] transition-all duration-500 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />

                    <label className="block mb-2 text-sm font-bold">Email:</label>
                    <input type="email" name="user_email" required className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-[#F5B041] transition-all duration-500 focus:shadow-outline" />

                    <label className="block mb-2 text-sm font-bold">Message:</label>
                    <textarea name="message" minLength={40} required className="w-full h-auto px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-[#F5B041] transition-all duration-500 focus:shadow-outline" />

                    <input type="submit" value="Send" className="mail-btn w-full px-4 py-2 mt-2 mb-4 font-bold text-white bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 rounded-md focus:outline-none focus:shadow-outline" />

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12694.218710066125!2d-6.608713317031148!3d37.30568682149113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11efeaa0164cdb%3A0xc5c8ef10f1ac5f80!2s21720%20Rociana%20del%20Condado%2C%20Huelva!5e0!3m2!1ses!2ses!4v1702421659805!5m2!1ses!2ses" className='rounded-md w-full' height="240px" loading="lazy"></iframe>
                </form>

                <iframe src="https://calendly.com/sebascm-dev/reunion-scm" className='mb-8 w-full h-[70vh] sm:h-auto rounded-md flex-grow shadow-md'></iframe>

            </div>
        </div>
    );
}
