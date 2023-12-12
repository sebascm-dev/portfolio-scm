'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ({ }: Props) {
    const [search, setSearch] = useState('');
    const [showInProgress, setShowInProgress] = useState(false);
    const [showFinished, setShowFinished] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 6;

    const projects = [
        {
            id: 1,
            name: 'Web FMC - UHU',
            status: 'Working',
            description: 'Página web de la Facultad de Ciencias Experimentales de la Universidad de Huelva. Desarrollada con Laravel. En proceso de desarrollo.',
            tags: ['#DesarrolloWeb', '#Backend', '#Frontend', '#Basededatos'],
            skills: ['html', 'css', 'php', 'laravel', 'mysql', 'bootstrap'],
            image: './img/projects-img/webfmc.png',
            url: 'https://www.uhu.es/fmc/',
            is: [
                'https://cdn-icons-png.flaticon.com/128/174/174854.png',
                'https://cdn-icons-png.flaticon.com/128/732/732190.png',
                'https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png',
                'https://cdn-icons-png.flaticon.com/128/5968/5968332.png',
            ]
        },
    ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase());
    };

    const isSubstringIn = (str: string, search: string) => {
        const searchLetters = search.split('');
        return searchLetters.every(letter => str.includes(letter));
    };

    const toggleInProgress = () => {
        setShowInProgress(prevState => !prevState);
        if (!showInProgress) {
            setShowFinished(false);
        }
    };

    const toggleFinished = () => {
        setShowFinished(prevState => !prevState);
        if (!showFinished) {
            setShowInProgress(false);
        }
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const filteredProjects = projects.filter(project =>
        (showInProgress ? project.status === 'Working' : true) &&
        (showFinished ? project.status === 'Finished' : true) &&
        (search.length > 0 ? (
            project.tags.some(tag => isSubstringIn(tag.toLowerCase(), search)) ||
            isSubstringIn(project.name.toLowerCase(), search) ||
            project.skills.some(skill => isSubstringIn(skill.toLowerCase(), search))
        ) : true)
    );

    return (
        <div className='mx-auto max-w-[90%]'>
            <header className='mt-[5em] pt-12 mb-8 text-center'>
                <h1 className='text-4xl uppercase tracking-[10px] text-gray-500'>Projects</h1>
            </header>

            <div>
                <div className='flex flex-col md:flex-row justify-between gap-2'>
                    <input
                        type="text"
                        placeholder="🔍Search projects..."
                        value={search}
                        onChange={handleSearchChange}
                        className="p-2 pl-5 mb-2 rounded-full text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#F5B041] transition-all duration-500"
                    />
                    <a href="#projects">
                        <div className='flex gap-2'>
                            <button
                                onClick={toggleInProgress}
                                className={`mb-2 bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center ${showInProgress ? 'bg-yellow-700' : ''}`}
                            >
                                {showInProgress ? 'X' : 'Working in Progress'}
                            </button>

                            <button
                                onClick={toggleFinished}
                                className={`mb-2 bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center ${showFinished ? 'bg-yellow-700' : ''}`}
                            >
                                {showFinished ? 'X' : 'Proyectos Finalizados'}
                            </button>
                        </div>
                    </a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 h-full gap-4'>
                    {filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage).map(project => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            key={project.id} className='bg-[#373737] rounded-md border border-[#373737] hover:border-[#F5B041] transition-all duration-500'>
                            <a
                                target='_blank'
                                href={project.url}>
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <img src={project.image} alt={project.name} className='w-full h-200px rounded-tl-md rounded-tr-md object-cover' />
                                    </div>
                                    <div className='flex-1 pl-5 pr-5 pt-2 pb-2'>
                                        <h2 className='text-xl text-center text-[#F5B041] font-bold'>{project.name}</h2>
                                        <p className='text-center'>{project.status}</p>
                                        <div className='flex gap-1'>
                                            {project.is?.map((imageUrl, index) => (
                                                <img key={index} className='w-5 h-5' src={imageUrl} alt={`Project ${project.id}`} />
                                            ))}
                                        </div>
                                        <p className='text-xs mt-2 mb-2'>{project.description}</p>
                                    </div>
                                    <p className='pl-5 pr-5 pb-2 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>{project.tags.join(' ')}</p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
                <a href="#projects">
                    <div className='flex gap-2 justify-center items-center mb-8'>
                        <button onClick={prevPage} disabled={currentPage === 0} className='bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center '>Página anterior</button>
                        <button onClick={nextPage} disabled={(currentPage + 1) * projectsPerPage >= filteredProjects.length} className='bg-[#F5B041] hover:bg-yellow-700 cursor-pointer transition-all duration-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center '>Página siguiente</button>
                    </div>
                </a>
            </div>
        </div>
    )
}