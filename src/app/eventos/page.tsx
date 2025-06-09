'use client'
import React, { useState } from "react";
import Image from "next/image";
import gta from "../../../public/eventos/gta_vi.jpg";
import switch2 from "../../../public/eventos/switch.jpeg";
import fortnite from "../../../public/eventos/fortnite.jpg";
import bot from "../../../public/eventos/bot.avif";
import fncs from "../../../public/eventos/fncs.png";

export default function eventos(){
    return(
        <div className="m-20">
            <div className="flex justify-start gap-5 content-center border-y-1 border-[#777] p-5 mx-26">
                <Image src={gta} alt="gta" className="h-30 w-30 rounded-sm" />
                <div className="content-center">
                    <h3 className="text-white text-xl">Lanzamiento del segundo trailer del GTA VI</h3>
                    <p className="text-[#B8C6D1]">El Lanzamiento del segundo trailer de GTA VI trajo consigo muchas sorpresas tales como la fecha de salida del videojugo y muchos easter egg</p>
                </div>
            </div>
            <div className="flex justify-start gap-5 content-center border-b-1 border-[#777] p-5 mx-26">
                <Image src={switch2} alt="gta" className="h-32 w-30 rounded-sm" />
                <div className="content-center">
                    <h3 className="text-white text-xl">Nintendo anuncia la nintendo switch 2</h3>
                    <p className="text-[#B8C6D1]">Con el anuncio de esta nueva consola nos damos cuenta los cambios que van a tener esta nueva generacion y los precios de los juegos</p>
                </div>
            </div>
            <div className="flex justify-start gap-5 content-center border-b-1 border-[#777] p-5 mx-26">
                <Image src={fortnite} alt="gta" className="h-30 w-30 rounded-sm" />
                <div className="content-center">
                    <h3 className="text-white text-xl">Llega la nueva temporada de fortnite</h3>
                    <p className="text-[#B8C6D1]">Entre las cosas que podemos destacar es que esta inspirada en star wards y ya no hay municion en el mapa</p>
                </div>
            </div>
            <div className="flex justify-start gap-5 content-center border-b-1 border-[#777] p-5 mx-26">
                <Image src={bot} alt="gta" className="h-30 w-30 rounded-sm" />
                <div className="content-center">
                    <h3 className="text-white text-xl">Astro bot gana el premio GOTY </h3>
                    <p className="text-[#B8C6D1]">Astro bot gana el premio GOTY del año 2024 superando a juegos como Balatro y Wukong</p>
                </div>
            </div>
            <div className="flex justify-start gap-5 content-center border-b-1 border-[#777] p-5 mx-26">
                <Image src={fncs} alt="gta" className="h-30 w-30 rounded-sm" />
                <div className="content-center">
                    <h3 className="text-white text-xl">FNCS Pro-Am</h3>
                    <p className="text-[#B8C6D1]">La proxima FNCS se va a jugar el 10 de mayo del 2025, el ganador se podra llevar $50,000</p>
                </div>
            </div>
        </div>
    );
}