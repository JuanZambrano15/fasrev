'use client'
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png"
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-[#171A21] text-white py-3 bottom-0 left-0 w-full">
            <div className="flex justify-around">
                <Link className="content-center hover:underline" href="/">Terminos de servicio</Link>
                <Link className="content-center hover:underline" href="/">Politica de privacidad</Link>
                <Link className="content-center hover:underline" href="/">Contacto</Link>
                <div className="flex justify-center">
                    <Link className="content-center" href="/">Fasrev</Link>
                    <Link className="content-center" href="/"><Image className="object-top-left" src={logo} alt="logo" width={30} /></Link>
                </div>
            </div>
        </footer>
    );
}


export default Footer;