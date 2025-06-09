import Image from "next/image";
import gran from "../../../public/inicio/gran_turismo.jpg";

export default function Halo() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Gran turismo</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={gran}
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
                    <p className="text-[#00aaff]">Carreras conduccion </p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">Polyphony Digital</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">Sony Interactive Entertainment</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    Gran Turismo 7 no ha parado desde su lanzamiento inicial, pero el 2 de noviembre de 2023 recibió una cantidad de actualizaciones sin precedentes que hizo que se convirtiera en lo que hoy conocemos como "Spec II". Hay una enorme cantidad de contenido, empezando por el nuevo vídeo de introducción, coches nuevos, un nuevo circuito, una experiencia de Circuitos del mundo más fácil de usar y funciones online actualizadas. Seguid manteniendo vuestras expectativas altas para una saga de Gran Turismo 7 en constante evolución.
                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}