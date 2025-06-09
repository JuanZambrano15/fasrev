import Image from "next/image";
import halo from "../../../public/inicio/halo.jpg";

export default function Halo() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Halo</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={halo}
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
                    <p className="text-[#00aaff]">Accion Aventura FPS</p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">343 Industries</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">Xbox game Studios</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    Cuando se ha perdido toda esperanza y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para luchar contra el enemigo más despiadado al que jamás haya hecho frente. Ponte la armadura del mayor héroe de la humanidad para vivir una aventura épica y explorar el descomunal anillo de Halo.
                    </p>
                </div>
                </div>
            </div>
            </div>
    );
}