import React from 'react'
import { FaBars} from 'react-icons/fa'
import { FaXmark} from 'react-icons/fa6'
import {nav} from 'framer-motion/client'
import { useState, useEffect } from 'react'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    // stop the page behind the open mobile menu from scrolling
    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : '';
    }, [showMenu]);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#home" className='text-2xl md:text-3xl font-bold text-white'>
                    Santosh 
                    <span className='text-purple'>Gurkhe</span>
                    <div className='w-4 h-4 bg-purple rounded-full'></div>

                </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Projects</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>

                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>
            {/* Mobile Menu Icon */}
            <button
                type='button'
                onClick={()=>setShowMenu(!showMenu)}
                aria-label={showMenu ? 'Close menu' : 'Open menu'}
                aria-expanded={showMenu}
                className='md:hidden p-2 -mr-2 text-white cursor-pointer'
            >
                {showMenu ? <FaXmark className='text-2xl'/> : <FaBars className='text-2xl' />}
            </button>
        </div>
        {/* Mobile Menu */}
        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-[calc(100dvh-6rem)] rounded-lg p-4 flex flex-col gap-2 text-center justify-center'>
                <a onClick={()=>setShowMenu(!showMenu)} href="#home" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>Home</span>
                </a>

                <a onClick={()=>setShowMenu(!showMenu)} href="#about" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>About</span>
                </a>

                <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>Skills</span>
                </a>

                <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>Projects</span>
                </a>

                <a onClick={()=>setShowMenu(!showMenu)} href="#experience" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>Experience</span>
                </a>

                <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className='block py-3 text-xl text-white/80 transition duration-300 hover:text-purple'>
                    <span>Contact</span>
                </a>
                </div>

            )
                
        }       
   </nav>
  )
}

export default Navbar