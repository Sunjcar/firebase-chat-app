import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center w-full gap-4 p-2 text-white bg-white dark:bg-slate-800'>
            <p className='footer'>Copyright © Ray Chen</p>
            <a href="https://github.com/sunjcar" target="_blank" rel='noreferrer' className='text-3xl text-black transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:rotate-720'>
                <FaGithub />
            </a>
        </footer>
    );
};



export default Footer