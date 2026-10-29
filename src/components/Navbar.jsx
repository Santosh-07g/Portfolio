import React from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaDownload } from 'react-icons/fa'
import { FaXmark} from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeSwitcher from './ThemeSwitcher'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = links.map((link) => link.id)

// The full link row needs ~1000px, so everything below `lg` (phones, tablets,
// landscape phones) uses the hamburger menu instead.
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const active = useActiveSection(sectionIds);

    // stop the page behind the open mobile menu from scrolling
    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : '';
    }, [showMenu]);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-6 md:px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#home" className='inline-block py-2 -my-2 text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                    Santosh
                    <span className='text-purple'>Gurkhe</span>
                    <span className='inline-block w-2.5 h-2.5 ml-1.5 bg-purple rounded-full'></span>

                </a>
            </div>
            <div className='hidden lg:flex space-x-10'>
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        aria-current={active === id ? 'true' : undefined}
                        className={`relative transition duration-300 hover:text-purple group ${active === id ? 'text-purple' : 'text-white/80'}`}
                    >
                        <span>{label}</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                        {/* one shared marker that slides between links as you scroll */}
                        {active === id && (
                            <motion.span
                                layoutId='nav-active'
                                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                className='absolute left-0 -bottom-1 w-full h-0.5 bg-purple'
                            />
                        )}
                    </a>
                ))}
            </div>
            {/* Resume (desktop) */}
            <a
                href={profile.resume.href}
                download={profile.resume.filename}
                className='hidden lg:inline-flex items-center gap-2 px-4 py-2 border border-purple rounded-lg text-white hover:bg-purple/20 transition duration-300'
            >
                <FaDownload />
                Resume
            </a>
            {/* Theme + menu buttons (below lg). Both are 44px so they're easy to tap. */}
            <div className='lg:hidden flex items-center -mr-2.5'>
                <ThemeSwitcher placement='navbar' />
                <button
                    type='button'
                    onClick={()=>setShowMenu(!showMenu)}
                    aria-label={showMenu ? 'Close menu' : 'Open menu'}
                    aria-expanded={showMenu}
                    className='flex h-11 w-11 items-center justify-center text-white cursor-pointer'
                >
                    {showMenu ? <FaXmark className='text-2xl'/> : <FaBars className='text-2xl' />}
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        {
            showMenu && (
                // overflow-y-auto + my-auto on the list: centered when there is room,
                // scrolls from the top when the screen is short (e.g. landscape phones)
                <div className='lg:hidden mt-4 bg-dark-300 h-[calc(100dvh-6rem)] rounded-lg p-4 flex flex-col overflow-y-auto overscroll-contain'>
                <div className='my-auto flex flex-col gap-2 text-center'>
                {links.map(({ id, label }) => (
                    <a
                        key={id}
                        onClick={()=>setShowMenu(false)}
                        href={`#${id}`}
                        className={`block py-3 text-xl transition duration-300 hover:text-purple ${active === id ? 'text-purple' : 'text-white/80'}`}
                    >
                        <span>{label}</span>
                    </a>
                ))}

                <a onClick={()=>setShowMenu(false)} href={profile.resume.href} download={profile.resume.filename} className='mx-auto mt-2 inline-flex items-center gap-2 px-5 py-3 border border-purple rounded-lg text-white transition duration-300 hover:bg-purple/20'>
                    <FaDownload />
                    <span>Resume</span>
                </a>
                </div>
                </div>

            )

        }
   </nav>
  )
}

export default Navbar
