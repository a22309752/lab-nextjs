
import Image from "next/image";
import tecnologias from "@/app/data/tecnologias.json";

export default function Tecnologias() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Tecnologias Exploradas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {tecnologias.map((tecnologia) => (
          <div
            key={tecnologia.title}
            className="bg-white text-black p-5 rounded-xl shadow-md flex flex-col items-center gap-3"
          >

            <Image
              src={`/tecnologias/${tecnologia.image}`}
              alt={tecnologia.title}
              width={80}
              height={80}
            />

            <h3 className="text-xl font-bold">
              {tecnologia.title}
            </h3>

            <p className="text-center">
              {tecnologia.description}
            </p>

            <p className="text-yellow-500 text-xl">
              {"★".repeat(tecnologia.rating)}
              {"☆".repeat(5 - tecnologia.rating)}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
