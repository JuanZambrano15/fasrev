'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useRouter } from "next/navigation";
import { createUser } from "../api/db";
import { AwardIcon } from "lucide-react";
export default function Register(){

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch('/api/register', { // Llamada a tu ruta de API
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                console.log('Usuario registrado:', data);
                router.push('/login');
            } else {
                setError(data.message || 'Error al registrar el usuario.');
            }
            } catch (error: any) {
            setError('Error de conexión con el servidor.');
            }
        
        
    }
    return(
        <div className="bg-[#171A21] min-h-screen flex justify-center ">
            <div className="bg-[#1B2838] m-20 content-center rounded-[50px]">
                <div className="justify-center text-white text-4xl flex gap-4 m-8">
                    <Image className="w-10" src={logo} alt="logo"/>
                    <p>Fasrev</p>
                </div>
                <div className="justify-center flex text-white text-6xl mx-20">
                    Crear cuenta
                </div>
                <div className="m-8 text-[#B8C6D1] mx-15">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <label >Nombre</label>
                        <input type="text" className="bg-[#2A3C53] border-2 border-[#3C9EE7] rounded-md p-1" value={name} onChange={(e) => setName(e.target.value)}/>
                        <label>Correo electronico</label>
                        <input type="email" className="bg-[#2A3C53] border-2 border-[#3C9EE7] rounded-md p-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label >Contraseña</label>
                        <input type="password" className="bg-[#2A3C53] border-2 border-[#3C9EE7] rounded-md p-1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="bg-[#1A9FFF] text-white text-xl hover:bg-[#1480D8] rounded-md p-1 my-1" type="submit"> Crear cuenta</button>
                    </form>
                </div>
                <div className="flex justify-center m-2">
                    <p className="text-white">¿Ya tienes cuenta?</p>
                    <Link className="text-[#1A9FFF] mb-8" href="/login">Iniciar sesion</Link>
                </div>
            </div>
        </div>
    );
}