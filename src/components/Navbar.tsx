'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
    <nav className='bg-[#171A21] text-white py-3 fixed top-0 left-0 w-full z-50'>
        <div className='flex justify-around content-center'>
            <div className='flex justify-center content-center'>
                <Link className='content-center' href="/"><Image className='object-top-left' src={logo} alt='logo' width={30} /></Link>
                <Link className='content-center font-medium' href="/">FASREV</Link>
            </div>
            <Link className='content-center hover:underline' href="/">INICIO</Link>
            <Link className='content-center hover:underline' href="/formulario">SOBRE NOSOTROS</Link>
            <Link className='content-center hover:underline' href="/eventos">Eventos</Link>
            <Link className='content-center hover:underline' href="#destacados">TIENDA</Link>
            <Link className='content-center hover:underline' href="#ofertas">OFERTAS</Link>
            <Link className='content-center hover:underline' href="/login">BIBLIOTECA</Link>
            <Link className='bg-[#1B2838] px-8 py-2 rounded-md content-center text-[#C6D4DF] transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110' href="/login">INICIAR SESION</Link>
        </div>
    </nav>
    );
};

export default Navbar;
    