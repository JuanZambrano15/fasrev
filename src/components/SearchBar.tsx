'use client';
import React, { useState } from 'react';


const SearchBar = () => {
    //creamos dos variables, una que es search para almacenar lo que el usuario escribe y set para actualizar cada vez que el usuario escribe
    const [searchTerm, setSearchTerm] = useState('');

    //esto se ejecuta cada vez que el valor cambia
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //event.target.value contiene el valor actual del input y set actualiza el estado con el valor ingresado
        setSearchTerm(event.target.value);
        //para ver lo que el usuario ingresa
        console.log('Termino de busqueda: ', searchTerm);
    };

    //esta funcion se ejecuta cuando el usuario preciona enter
    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        //aqui ira las funciones de buscar
        setSearchTerm('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input className='border-[#5C5C5C] rounded-sm border-2 bg-[#1F232D] ' type="text" placeholder="Buscar" value={searchTerm} onChange={handleChange} />
        </form>
    );
}


export default SearchBar