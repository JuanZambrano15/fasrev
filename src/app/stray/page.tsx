import Image from "next/image";
import stray from "../../../public/inicio/stray.jpg";

export default function Halo() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Stray</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={stray}
                alt="Game"
                className="w-148 rounded-lg shadow-lg"
                />

                {/* Información del juego */}
                <div className="flex-1 space-y-4 content-center">
                <button className="bg-[#00aaff] hover:bg-[#0094dd] text-white font-bold py-2 px-6 rounded-lg">
                    INSTALAR
                </button>

                <div>
                    <p className="font-semibold">Género:</p>
                    <p className="text-[#00aaff]">Gatos Aventura Indie</p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">BlueTwelve Studio</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">Annapurna Interactive</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    Perdido, solo y separado de su familia, un gato callejero debe desentrañar un antiguo misterio para escapar de una ciudad olvidada. <br /> <br />

Stray es un juego de aventuras de un gato en tercera persona ambientado en los callejones iluminados por el neón de una ciberciudad decadente y sus turbios rincones. Deambula por los alrededores, defiéndete de amenazas imprevistas y resuelve los misterios de este lugar poco acogedor habitado por androides inocentes y criaturas peligrosas.

                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}