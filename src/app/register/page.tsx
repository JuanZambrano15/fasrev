'use client'
import React, { useState } from "react";
import Image from "next/image";
import location from "../../../public/formulario/location.png";
import telefono from "../../../public/formulario/telefono.png";
import email from "../../../public/formulario/email.png"; 

import Link from "next/link";

export default function Formulario(){

    return(
    <div className="flex justify-center min-h-screen bg-[#1B2838] ">
        <div className="bg-[#171A21] my-20 p-4 border-2 border-[#171A21] rounded-xl">
            <div className="text-white flex  gap-2 m-3">
                <Image className="h-12 w-12" src={location} alt="location"/>
                <div>
                <h2>Direccion</h2>
                <p>Universidad Francisco de Paula Santander, Ocaña</p>
                </div>
            </div>
            <div className="text-white flex  gap-2 m-3">
                <Image className="h-12 w-12" src={telefono} alt="location"/>
                <div>
                <h2>Contacto</h2>
                <p>+57 3000000000</p>
                </div>
            </div>
            <div className="text-white flex  gap-2 m-3">
                <Image className="h-12 w-12" src={email} alt="location"/>
                <div>
                <h2>Email</h2>
                <p>jjzambranom@ufpso.edu.co</p>
                </div>
            </div>
            
        </div>
        <div className="  m-20 text-white border-2 border-[#171A21] bg-[#171A21] p-4 rounded-xl">
            <div className="flex justify-around gap-3">
                <div className="flex flex-col">
                <label>Nombre</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>
                </div>
                <div className="flex flex-col">
                <label>Apellido</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>

                </div>
            </div>
            <div className=" gap-3">
                <div className="flex flex-col">
                <label>Tipo de documento</label>
                <select name="tipoDocumento" id="tipoDocumento" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1.5" defaultValue="">
                    <option value="" ></option>
                    <option value="CC">Cedula de ciudadania</option>
                    <option value="CE">Cedula de extranjeria</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="PP">Pasaporte</option>
                </select>
                </div>
                <div className="flex flex-col">
                <label>Numero de documento</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>

                </div>
            </div>
            <div className="flex justify-around gap-3">
                <div className="flex flex-col">
                <label>Numero de telefono</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>
                </div>
                <div className="flex flex-col">
                <label>Correo electronico</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>

                </div>
            </div>
            <div className="flex justify-around gap-3">
                <div className="flex flex-col">
                <label>Sexo</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>
                </div>
                <div className="flex flex-col">
                <label>Fecha de nacimiento</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>

                </div>
            </div>
            <div className=" gap-3">
                <div className="flex flex-col">
                <label>Pais</label>
                <select name="pais" id="pais" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1.5 " defaultValue=" ">
                    <option value=""></option>
                    <option value="Co">Colombia</option>
                    <option value="ve">Venezuela</option>
                    <option value="Ec">Ecuador</option>
                    <option value="Mx">Mexico</option>
                </select>
                </div>
            </div>
            <div className="flex justify-around gap-3">
                <div className="flex flex-col">
                <label>Departamento</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>

                </div>
                <div className="flex flex-col">
                <label>Ciudad</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-1"/>
                </div>
                
            </div>
            <div >
                <div className="flex flex-col">
                <label>Comentario</label>
                <input type="text" className="bg-[#2A3C53] border-2 border-[#5C5C5C] rounded-md p-20"/>
                </div>
                
            </div>
            <div className="flex justify-center">
                <Link href="/biblioteca">
                    <button type="submit" className="bg-[#1A9FFF] text-white text-xl hover:bg-[#1480D8] rounded-md py-1.5 mt-4 px-20">Enviar</button>
                </Link>
            </div>
        </div>
    </div>
    );
}