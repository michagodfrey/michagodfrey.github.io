import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Logo from '../assets/MG.webp'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadowClass, setShadowClass] = useState('');

    const openMenu = () => {
        setNav(true);
        document.body.classList.add('overflow-hidden');
    }

    const closeMenu = () => {
        setNav(false);
        document.body.classList.remove('overflow-hidden')
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadowClass('shadow-md');
            } else {
                setShadowClass('');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`${shadowClass} fixed w-full h-[96px] flex justify-between items-center px-8 bg-[#0a192f] z-10`}>
            <div>
                <Link to="home" smooth duration={500}>
                    <img src={Logo} alt="MG" className="cursor-pointer" />
                </Link>
            </div>

            {/* desktop menu */}
            <ul className="hidden lg:flex text-2xl">
                <li className="mx-6 cursor-pointer">
                    <Link to="home" smooth duration={500} offset={-96} spy activeClass="border-b-4 border-emerald-600">
                        Home
                    </Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="about" smooth duration={500} offset={-96} spy activeClass="border-b-4 border-emerald-600">
                        About
                    </Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="skills" smooth duration={500} offset={-96} spy activeClass="border-b-4 border-emerald-600">
                        Skills
                    </Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="work" smooth duration={500} offset={-96} spy activeClass="border-b-4 border-emerald-600">
                        Work
                    </Link>
                </li>
                <li className="mx-6 cursor-pointer">
                    <Link to="contact" smooth duration={500} offset={-96} spy activeClass="border-b-4 border-emerald-600">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* mobile menu buttons */}
            { nav ? 
            (<div onClick={closeMenu} className="lg:hidden z-10">
                <FaTimes size={40} /> 
            </div>) 
            : 
            (<div onClick={openMenu} className="lg:hidden z-10">
                <FaBars size={40} />
            </div>)
            }

            {/* mobile menu */}
            <ul className={ nav ? 'absolute top-20 left-0 w-full h-screen bg-[#0a192f] text-2xl flex flex-col items-center' : 'hidden' }>
                <li className="py-3">
                    <Link onClick={closeMenu} to="home" smooth={true} duration={500} offset={-96}>
                        Home
                    </Link>
                </li>
                <li className="py-3">
                    <Link onClick={closeMenu} to="about" smooth={true} duration={500} offset={-96}>
                        About
                    </Link>
                </li>
                <li className="py-3">
                    <Link onClick={closeMenu} to="skills" smooth={true} duration={500} offset={-96}>
                        Skills
                    </Link>
                </li>
                <li className="py-3">
                    <Link onClick={closeMenu} to="work" smooth={true} duration={500} offset={-96}>
                        Work
                    </Link>
                </li>
                <li className="py-3">
                    <Link onClick={closeMenu} to="contact" smooth={true} duration={500} offset={-96}>
                        Contact
                    </Link>
                </li>
                <div className="border-b border-gray-300 w-1/2 max-w-xs mx-auto my-3"></div>
                <li className="py-3">
                    <a href="https://github.com/michagodfrey" className="flex justify-between items-center">
                        GitHub <FaGithub size={30} className="ml-4" />
                    </a>
                </li>
                <li className="py-3">
                    <a href="https://twitter.com/Michael07865192" className="flex justify-between items-center">
                        Twitter <FaTwitter size={30} className="ml-4" />
                    </a>
                </li>
                <li className="py-3">
                    <a href="https://www.linkedin.com/in/michael-godfrey-82258bb3/" className="flex justify-between items-center">
                        LinkedIn <FaLinkedin size={30} className="ml-4" />
                    </a>
                </li>
                <li className="py-3">
                    <a href="https://docs.google.com/document/d/1jRoP_4aEGobglqGzhDAHdmLf8L9kWNda/edit?rtpof=true" className="flex justify-between items-center">
                        Resume <BsFillPersonLinesFill size={30} className="ml-4" />
                    </a>
                </li>
            </ul>

            {/* desktop sidebar social menu */}
            <ul className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <li className="w-[160px] h-[60px] px-4 flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
                    <a href="https://github.com/michagodfrey" className="flex justify-between items-center w-full">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] px-4 flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]">
                    <a href="https://twitter.com/Michael07865192" className="flex justify-between items-center w-full">
                        Twitter <FaTwitter size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] px-4 flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
                    <a href="https://www.linkedin.com/in/michael-godfrey-82258bb3/" className="flex justify-between items-center w-full">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] px-4 flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600">
                    <a href="mailto:mail@michael-godfrey.com" className="flex justify-between items-center w-full">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] px-4 flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-600">
                    <a href="https://docs.google.com/document/d/1jRoP_4aEGobglqGzhDAHdmLf8L9kWNda/edit?rtpof=true" className="flex justify-between items-center w-full">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar