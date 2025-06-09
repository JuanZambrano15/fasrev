import Image from "next/image";
import tloff from "../../../public/inicio/tlof.jpg";

export default function tlof() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">The last of us</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={tloff}
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
                    <p className="text-[#00aaff]">Zombies disparos</p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">Naughty Dog LLC, Iron Galaxy Studios</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">PlayStation Publishing LLC</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie, de una zona militar en cuarentena. Pero lo que comienza siendo una simple tarea, pronto se transforma en un brutal viaje por el país.
                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}