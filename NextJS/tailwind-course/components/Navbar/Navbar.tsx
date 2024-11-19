"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GoArrowRight } from "react-icons/go";
import { RiMenu3Fill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='p-5 flex items-center justify-between'>
            <Link href={"/"} className='flex gap-2 items-center'>
                <span className='text-3xl font-bold'>ZORO</span>
            </Link>
            <div className='hidden md:flex font-[500] text-lg gap-8'>
                <Link href={""} className="font-sans text-lg font-medium">Pricing</Link>
                <Link href={""} className='font-sans text-lg font-medium'>Docs</Link>
                <Link href={""} className='font-sans text-lg font-medium'>Changelog</Link>
                <Link href={""} className='font-sans text-lg font-medium'>Blog</Link>
                <Link href={""} className='font-sans text-lg font-medium'>Login</Link>
            </div>
            <button className='hidden md:flex gap-2 border-2 items-center hover:border-gray-400 p-3 rounded-full'>
                <IoLogoElectron size={18} />
                <span>Electron Developer</span>
                <GoArrowRight className='hidden md:flex' />
            </button>
            <button className='p-2 md:hidden' onClick={toggleMenu}>
                <RiMenu3Fill size={20} />
            </button>
            <div className={`fixed bg-gray-300 inset-0 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {isMenuOpen && (
                    <>
                        <div className="flex justify-between">
                            <Link href={"/"} className='flex gap-2 p-5 items-center'>
                                <span className='text-3xl font-bold'>ZORO</span>
                            </Link>
                            <button className='p-5 md:hidden' onClick={toggleMenu}>
                                <IoCloseOutline size={30} />
                            </button>
                        </div>
                        <div className='mt-6 '>
                            <Link href={""} className="font-sans text-lg font-medium m-3 p-3 hover:bg-gray-400 block rounded-lg ">Pricing</Link>
                            <Link href={""} className='font-sans text-lg font-medium m-3 p-3 hover:bg-gray-400 block rounded-lg  '>Docs</Link>
                            <Link href={""} className='font-sans text-lg font-medium m-3 p-3 hover:bg-gray-400 block rounded-lg  '>Changelog</Link>
                            <Link href={""} className='font-sans text-lg font-medium m-3 p-3 hover:bg-gray-400 block rounded-lg '>Blog</Link>
                            <Link href={""} className='font-sans text-lg font-medium m-3 p-3 hover:bg-gray-400 block rounded-lg '>Login</Link>
                        </div>
                        <div className='h-[2px] mx-2 rounded-full bg-gray-400'>
                        </div>
                        <button className='flex gap-2 items-center hover:bg-gray-400 p-3 w-[600px]  m-3 rounded-full '>
                            <IoLogoElectron size={19} />
                            <span>Electron Developer</span>
                            <GoArrowRight className='' />
                        </button>
                    </>
                )}
            </div>
        </div>
  )
}

export default Navbar
