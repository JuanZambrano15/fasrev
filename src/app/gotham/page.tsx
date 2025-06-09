import Image from "next/image";
import gotham from "../../../public/inicio/gotham_night.jpg";

export default function Halo() {
    return (
            <div className="min-h-screen bg-[#0b0f19] text-white p-8 text-center">
                <div className="border-b-2 border-[#1B2838]">

                <h1 className="text-4xl font-bold mb-6">Gotham knights</h1>
                </div>
            <div className="flex flex-col md:flex-row gap-8 text-left mt-4">
                {/* Imagen del juego */}
                <Image
                src={gotham}
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
                    <p className="text-[#00aaff]">Accion SuperHeroes </p>
                </div>
                <div>
                    <p className="font-semibold">Desarrollador:</p>
                    <p className="text-[#00aaff]">Warner Bros. Games Montréal, QLOC</p>
                </div>
                <div>
                    <p className="font-semibold">Editor:</p>
                    <p className="text-[#00aaff]">Warner Bros. Games</p>
                </div>
                {/* Descripción */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2">Descripción del juego</h2>
                    <p className="text-gray-300 leading-relaxed">
                    Batman ha muerto. Un submundo nuevo de criminales ha barrido las calles de Gotham City. La batfamilia, compuesta por Batgirl, Nightwing, Capucha Roja y Robin, deberá proteger Gotham, devolver la esperanza a sus ciudadanos, la disciplina a sus policías y el miedo a sus criminales. <br /> <br />
Además de resolver los misterios que conectan los capítulos más oscuros de la historia de la ciudad y derrotar a famosos villanos en enfrentamientos épicos, deberás convertirte en el nuevo Caballero Oscuro y evitar que el caos se apodere de las calles. <br />
 <br />
Gotham Knights es un juego de rol y de acción en mundo abierto que se desarrolla en la versión más dinámica e interactiva de Gotham City. Tanto si juegas en solitario como con otro héroe, patrulla los cinco distritos de Gotham y detén cualquier actividad criminal que encuentres en tu camino. 
                    </p>
                </div>
                </div>
            </div>

            </div>
    );
}