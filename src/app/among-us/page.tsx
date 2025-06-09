import Image from "next/image";
import among_us from "../../../public/inicio/among_us.jpg";

export default function Halo() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Among us</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={among_us}
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
                    <p className="text-[#00aaff]">Multijugador 2D</p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">Innersloth</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">Innersloth</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    Saludos, recluta: Te damos la bienvenida al nuevo mapa de Among Us, Airship. Trabaja en equipo en esta nave para llevar a cabo tu importante misión..., ya sea como tripulante o como impostor.  

                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}