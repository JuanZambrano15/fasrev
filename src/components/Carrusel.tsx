'use client';

import React,{useState,useEffect} from "react";
import Image from "next/image";

//importamos las imagenes
import cod from "../../public/carrusel/cod.jpg";
import elden_ring from "../../public/carrusel/elden_ring.jpg";
import fornite from "../../public/carrusel/fornite.jpg";
import god_of_war from "../../public/carrusel/god_of_war.jpg";
import gta from "../../public/carrusel/gta.jpg";
import mk from "../../public/carrusel/mk.jpg";
import red_dead from "../../public/carrusel/red_dead.jpg";
import spiderman from "../../public/carrusel/spiderman.jpg";

//arreglo con las imagenos
const imagenes = [cod,elden_ring,fornite,god_of_war,gta,mk,red_dead,spiderman];

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentIndex((prevIndex) => (prevIndex+1)%imagenes.length);
        }, 4000);
        
        return () => clearInterval(intervalId);
    }, []);

    const goToPrevius = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 + imagenes.length) % imagenes.length);
    }

    return(
        <div className="relative w-90% h-20 md:h-64 lg:h-100 overflow-hidden rounded-md shadow-md mx-8 mt-20">
            {imagenes.map((imagen , index) => (
            <div 
            key = {index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
                <Image src={imagen} alt={'Imagen ${index + 1}'} layout="fill" objectFit="cover" className="rounded-md"/>
            </div>
        ))}
        {/* Botones de navegación (opcional) */}
        <button
        onClick={goToPrevius}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-80 focus:outline-none z-20"
        >
        {'<'}
        </button>
        <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-80 focus:outline-none z-20"
        >
        {'>'}
        </button>
      {/* Indicadores de página (opcional) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imagenes.map((_, index) => (
            <button
            key={index}
            className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            } focus:outline-none`}
            onClick={() => setCurrentIndex(index)}
            ></button>
        ))}
        </div>
        </div>
    );
};

export default Carrusel;