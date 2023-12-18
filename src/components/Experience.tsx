'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';
import Image from 'next/image';

type Props = {}

export default function Experience({ }: Props) {
    return (
        <div className='mx-auto max-w-[90%]'>
            <header className='mt-[5em] pt-12 text-center'>
                <h1 className='text-4xl uppercase tracking-[10px] text-gray-500'>Experience</h1>
            </header>

            {/* Slider */}
            <div className=''>
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='w-[100%] mx-auto text-center m-2'
                    centeredSlides={false}
                    slidesPerView={2}
                    initialSlide={0}
                    spaceBetween={30}
                    grabCursor={true}
                >
                    {experience.map((item, index) => (
                        <SwiperSlide key={`${item.name}-${index}`}>
                            <div className='bg-[#373737] h-[700px] m-4 w-full md:w-[90%] mx-auto rounded-[10px] shadow-xl flex flex-col justify-between pb-8 md:mb-0 border border-[#373737] hover:border-[#F5B041] transition-all duration-500' style={{ marginBottom: '50px' }}>
                                <div className='relative h-44 md:h-52 xl:h-64 w-full' style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px 10px 0px 0' }}>
                                    <div className='absolute inset-0 bg-black opacity-50' style={{ borderRadius: '10px 10px 0 0' }}></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Image
                                            src={item.icono}
                                            alt={item.name}
                                            className='w-24 h-24 p-2 bg-[#373737]/80'
                                            style={{ borderRadius: '50%' }}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between flex-grow'>
                                    <div>
                                        <h2 className='text-xl text-center text-[#F5B041] font-semibold mt-4'>{item.name}</h2>
                                        <p className='mb-4 text-xs'>{item.time}</p>
                                        <h3 className='text-left pl-2 text-[#F5B041]'>About:</h3>
                                        <p className='text-sm text-left p-2 mb-4'>{item.description}</p>
                                        <h3 className='text-left pl-2 text-[#F5B041]'>{item.status} In:</h3>
                                        {item.services &&
                                            <ul className='text-xs text-left pl-2'>
                                                {item.services.map((service, index) => (
                                                    <li key={index}>- {service}</li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                    <a href={item.link} target='_blank' rel='noopener noreferrer' className='mt-5 flex justify-center'>
                                        <RxArrowTopRight className='w-8 h-8' />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <h3 className='text-xl text-center uppercase tracking-[10px] text-gray-500'>
                Certificates & Titles
            </h3>
            {/* CARRUCEL DE IMAGENES AQUI DEBAJO */}

        </div>
    )
}

// Experiencia Laboral y Académica
const experience = [
    {
        icono: 'https://aulafutbol.uca.es/wp-content/uploads/2020/10/logo-universidad-de-huelva.png',
        img: 'https://www.uhu.es/sites/default/files/2022-10/Estudia_en_la_UHU_05_1472x804px.png',
        name: 'University of Huelva - UHU',
        time: 'Actualidad',
        description: 'Working at the University of Huelva as a web developer. Where I am in charge of the web FMC of the university in the faculty of experimental, the maintenance of the same and the experiencebase.',
        status: 'Working',
        services: [
            'Backend with PHP and Laravel',
            'Frontend',
            'FMC Web Development',
            'experiencebase Manipulation',
        ],
        link: 'https://uhu.es',
    },
    {
        icono: 'https://pbs.twimg.com/profile_images/1101837603886845954/6hgKG44F_400x400.png',
        img: 'https://w.wallhaven.cc/full/k9/wallhaven-k9k9l7.jpg',
        name: 'Administración de Sistemas Informáticos en Red - ASIR',
        time: '2021 - 2023',
        description: 'Higher level training cycle of administration of network computer systems. In which I have learned to administer networked computer systems, to configure servers, to program in different languages, etc...',
        status: 'Studying',
        services: [
            'Network planning and administration',
            'Operating systems administration',
            'experiencebase management',
            'Markup languages',
            'Web application implementation', 'Security and high availability',
            'Security and high availability',
        ],
        link: '',
    },
    {
        icono: 'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/301010304_438328564978811_9172548422368763520_n.png?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=aXW33u3sSkQAX9Rsgix&_nc_ht=scontent-mad1-1.xx&oh=00_AfAjtugAma9Usu_2gX0Uw2h8U-_fWbMEpxq7OLleD9Iv2A&oe=657F3669',
        img: 'https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-9/119460804_1597817960398862_105723894192595918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=EMtVhg5y-fgAX_HNA00&_nc_ht=scontent-mad2-1.xx&oh=00_AfCGMFW4FptaWt-ab81HRQ6AoQ637FB3KaLB9xY_9yvzPg&oe=65900FAE',
        name: 'MVR System',
        time: '2021',
        description: 'Computer repair company and sale of computer components. Also normally works with servers and network cabling.',
        status: 'Working',
        services: [
            'Server configuration',
            'Computer repair',
            'Installation of cabling',
            'Computer sales',
        ],
        link: '',
    },
    {
        icono: 'https://pbs.twimg.com/profile_images/1101837603886845954/6hgKG44F_400x400.png',
        img: 'https://i.blogs.es/7f4b40/montajepc2/1366_2000.jpeg',
        name: 'Sistemas Microinformáticos y Redes - SMR',
        time: '2019 - 2021',
        description: 'Medium grade training cycle of microcomputer systems and networks. In which I learned how to assemble and repair computers, configure servers, cable networks, etc...',
        status: 'Studying',
        services: [
            'Assembly and maintenance of equipment',
            'Network services',
            'Local area networks',
            'Computer security',
            'Single-user operating systems',
            'Network Operating Systems',
            'Office applications',
            'Implementation of web applications',
            'Training and labor orientation',
        ],
        link: '',
    },
]

const certificates = [
    {
        img: 'https://i.blogs.es/7f4b40/montajepc2/1366_2000.jpeg',
        name: 'Sistemas Microinformáticos y Redes - SMR',
        time: '2019 - 2021',
    },
]