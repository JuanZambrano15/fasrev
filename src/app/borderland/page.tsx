import Image from "next/image";
import borderland from "../../../public/inicio/borderland.jpg";

export default function Borderland() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Borderland</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={borderland}
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
                    <p className="text-[#00aaff]">Rol FPS Botin</p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">Gearbox Software</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">2K</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    ¡Vuelve el padre de los shooter-looter, con tropecientas mil armas y una aventura caótica! Arrasa a tus enemigos y descubre mundos inéditos con uno de los cuatro nuevos buscacámaras. Juega solo o con amigos para derribar a adversarios increíbles, hacerte con montones de botín y salvar tu hogar de la secta más cruel de la galaxia.
                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}