import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import Carrusel from '@/components/Carrusel';
import Image from 'next/image';

import among_us from '../../public/inicio/among_us.jpg';
import borderland from '../../public/inicio/borderland.jpg';
import halo from '../../public/inicio/halo.jpg';
import tlof from '../../public/inicio/tlof.jpg';
import gotham_night from "../../public/inicio/gotham_night.jpg";
import gran_turismo from "../../public/inicio/gran_turismo.jpg";
import stray from "../../public/inicio/stray.jpg"

export const metadata: Metadata = {
  title: 'Fasrev',
  description: 'Pagina de videojuegos',
};

export default function HomePage() {
  return (
    <div>
      <Carrusel />
      {/*Destacados de la semana*/ }

      <section id='destacados'>

      <div className='text-white m-8 text-2xl'>Destacados de la semana</div>
      <div className='text-white m-8 flex justify-between gap-8 '>
        <div>
          <Link href="/among-us"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={among_us} alt='among us'/></Link>
          <p className='text-xl'>Among us</p>
          <p>$16.000</p>
        </div>
        <div>
          <Link href="/borderland"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={borderland} alt='borderland'/></Link>
          <p className='text-xl'>Borderland 3</p>
          <p>$170.000</p>
        </div>
        <div>
          <Link href="/halo"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={halo} alt='halo'/></Link>
          <p className='text-xl'>Halo infinite</p>
          <p>$260.000</p>
        </div>
        <div>
          <Link href="/tlof"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={tlof} alt='tlof'/></Link>
          <p className='text-xl'>The last of us</p>
          <p>$220.000</p>
        </div>
      </div>
      </section>


    {/*Ofertas especiales */}
    <section id='ofertas'>

    <div className='text-white m-8 text-2xl'>Ofertas especiales</div>
    <div className='text-white m-8 flex justify-between gap-8 '>
      <div>
        <Link href="/gotham"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={gotham_night} alt='gotham_night'/></Link>
          <p className='text-xl'>Gotham knights</p>
          <p>$90.000</p>
          <p className='line-through'>$190.000</p>
      </div> 
      <div>
        <Link href="/grand"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110" src={gran_turismo} alt='gran_turismo'/></Link>
          <p className='text-xl'>Grand turismo</p>
          <p>$250.000</p>
          <p className='line-through'>$390.000</p>
      </div> 
      <div>
        <Link href="/stray"><Image className="h-70 border-3 border-white rounded-md transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110 " src={stray} alt='stray'/></Link>
        <p className='text-xl'>Stray</p>
        <p>$20.000</p>
        <p className='line-through'>$40.000</p>
      </div> 
    </div>
    </section>


    {/*categorias*/}
    <div className='text-white m-8 justify-between flex '>
      <div className='text-2xl '>Categorias</div>
      <div className=' text-[#C6D4DF] hover:underline'><Link href="/">Ver mas</Link></div>
    </div>
    <div className='text-white m-8 flex justify-between gap-8 text-3xl'>
      <div className='bg-[1F232D] h-50 w-full border-3 border-white rounded-md text-center content-center transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110'>RPG</div>
      <div className='bg-[1F232D] h-50 w-full border-3 border-white rounded-md text-center content-center transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110'>Sanbox</div>
      <div className='bg-[1F232D] h-50 w-full border-3 border-white rounded-md text-center content-center transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110'>Battle royale</div>
      <div className='bg-[1F232D] h-50 w-full border-3 border-white rounded-md text-center content-center transition-transform duration-300 ease-in-out transform-origin-center scale-100 hover:scale-110'>FPS</div>
    </div>
    </div>
  );
}
