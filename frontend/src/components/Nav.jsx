import React, { useState } from 'react';
import Logo from '../assets/2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Nav = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => { setNav(!nav) };

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-background text-main-light border-b-main-light'>
            <div>
                <img src={Logo} alt="Logo-image" className='w-[80px]' />
            </div>
            <ul className='hidden md:flex '>
                <li>
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Hamberger button */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile buttons */}
            <ul className={nav ? 'hidden' : 'fixed  top-0 left-0 w-[70%] bg-background flex flex-col justify-center md:hidden items-center'}>
                <li className='py-5 text-1xl font-bold border-b '>
                    <Link
                        onClick={handleNav}
                        to="hero"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='py-5 text-1xl font-bold border-b '>
                    <Link
                        onClick={handleNav}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className='py-5 text-1xl font-bold border-b '>
                    <Link
                        onClick={handleNav}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className='py-5 text-1xl font-bold border-b '>
                    <Link
                        onClick={handleNav}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
                <li className='py-5 text-1xl font-bold  '>
                    <Link
                        onClick={handleNav}
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className=' flex-col fixed top-[35%] left-0 hidden lg:flex'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-main-light'
                            href="/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-main-light'
                            href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-main-light'
                            href="/">
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-main-light'
                            href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav