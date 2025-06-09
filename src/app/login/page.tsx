'use client'

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Login(){

   
    

    return(
        <div className="bg-[#171A21] min-h-screen flex justify-center ">
            <div className="bg-[#1B2838] m-20 content-center rounded-[50px]">
                <div className="justify-center text-white text-4xl flex gap-4 m-8">
                    <Image className="w-10" src={logo} alt="logo"/>
                    <p>Fasrev</p>
                </div>
                <div className="justify-center flex text-white text-6xl mx-20">
                    Iniciar sesion
                </div>
                <div className="m-8 text-[#B8C6D1] mx-15">
                    <form className="flex flex-col gap-3" >
                        <label>Correo electronico</label>
                        <input type="email" className="bg-[#2A3C53] border-2 border-[#3C9EE7] rounded-md p-1"/>
                        <label >Contraseña</label>
                        <input type="password" className="bg-[#2A3C53] border-2 border-[#3C9EE7] rounded-md p-1"/>
                        {<p className="text-red"></p>}
                        <Link href="/biblioteca" className="flex justify-center ">
                            <button className="bg-[#1A9FFF] text-white text-xl hover:bg-[#1480D8] rounded-md p-1 my-1" type="submit"> Iniciar sesion</button>
                        </Link>
                    </form>
                </div>
                <div className="text-[#1A9FFF] justify-center flex"><Link href="/" >¿Olvidaste tu contraseña?</Link></div>
                <div className="flex justify-center m-2">
                    <p className="text-white">¿No tienes cuenta?</p>
                    <Link className="text-[#1A9FFF]" href="/register">Registrate</Link>
                </div>
            </div>
        </div>
    );
}