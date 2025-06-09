import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import halo from '../../../public/inicio/halo.jpg';
import among_us from '../../../public/inicio/among_us.jpg';
import borderland from '../../../public/inicio/borderland.jpg';
import tlof from '../../../public/inicio/tlof.jpg';
export default function Biblioteca() {
    return (
        <div className="h-screen bg-[#171A21] text-white">
            <div className="top-0 w-full text-5xl font-extrabold text-center py-4 border-b-2 border-[#1B2838]">
                <h1>Biblioteca</h1>
            </div>
            <div className='flex justify-around my-12'>
                <Link href="/halo" className='scale-100 hover:scale-110 transition-transform duration-300'>
                    <Image className="h-60 w-60 rounded-lg" src={halo} alt="Halo Infinite" />
                    <h2 className='text-lg py-1'>Halo infinite</h2>
                    <p className='text-[#66C0F4] text-sm'>No instalado</p>
                </Link>
                <Link href="/among-us" className='scale-100 hover:scale-110 transition-transform duration-300'>
                    <Image className="h-60 w-60 rounded-lg" src={among_us} alt="Halo Infinite" />
                    <h2 className='text-lg py-1'>Among us</h2>
                    <p className='text-[#66C0F4] text-sm'>No instalado</p>
                </Link>
                <Link href="/borderland" className='scale-100 hover:scale-110 transition-transform duration-300'>
                    <Image className="h-60 w-60 rounded-lg" src={borderland} alt="Halo Infinite" />
                    <h2 className='text-lg py-1'>Borderland</h2>
                    <p className='text-[#66C0F4] text-sm'>No instalado</p>
                </Link>
                <Link href="/tlof" className='scale-100 hover:scale-110 transition-transform duration-300'>
                    <Image className="h-60 w-60 rounded-lg" src={tlof} alt="Halo Infinite" />
                    <h2 className='text-lg py-1'>The last of us</h2>
                    <p className='text-[#66C0F4] text-sm'>No instalado</p>
                </Link>
            </div>
            
        </div>
    );
}