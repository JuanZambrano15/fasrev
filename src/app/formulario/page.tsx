'use client'
import React, { useState } from "react";
import Image from "next/image";
import location from "../../../public/formulario/location.png";
import telefono from "../../../public/formulario/telefono.png";
import email from "../../../public/formulario/email.png"; 
import logo from "../../../public/logo.png"

export default function Formulario(){

    return(
    <div className="flex justify-center m-60 bg-[#1B2838] ">
        <div className="bg-[#171A21] my-20 p-4 border-2 border-[#171A21] rounded-xl text-white flex content-center items-center gap-5">
            <div className="">
            <Image src={logo} alt="logo"/>
            </div>
            <div className="justify-center">

            <h2 className="text-5xl">Sobre nosostros</h2>
            <p>Somos una pagina que se especializa en la venta de videojugos, de monedas de videojuegos y de noticias y eventos sobre videojuegos </p>
            </div>
        </div>
        
    </div>
    );
}