"use client";

import SidebarArbitro from "./SidebarArbitro";
import {
  FaFutbol,
  FaCalendarAlt,
  FaStar,
  FaClipboardCheck,
} from "react-icons/fa";
import EstadisticaCard from "./EstadisticaCard";
import TarjetaPartido from "./TarjetaPartido";

export default function DashboardArbitro() {
  const estadisticas = [
    {
      titulo: "Partidos Hoy",
      valor: 3,
      icono: <FaFutbol />,
      color: "bg-green-500",
    },

    {
      titulo: "Próximo Partido",
      valor: "6:00 PM",
      icono: <FaCalendarAlt />,
      color: "bg-blue-500",
    },

    {
      titulo: "Calificación",
      valor: "4.9",
      icono: <FaStar />,
      color: "bg-yellow-500",
    },

    {
      titulo: "Partidos Dirigidos",
      valor: 125,
      icono: <FaClipboardCheck />,
      color: "bg-purple-500",
    },
  ];

  return (
    <main className="flex bg-gray-100 min-h-screen text-gray-700">
      <SidebarArbitro />

      <section className="flex-1 ml-72 p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-700">
            Buenos días, Carlos 👋
          </h1>

          <p className="text-gray-500 mt-2">Hoy tienes 3 partidos asignados.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {estadisticas.map((item, index) => (
            <EstadisticaCard
              key={index}
              titulo={item.titulo}
              valor={item.valor}
              icono={item.icono}
              color={item.color}
            />
          ))}
        </section>

        <section className="bg-white rounded-xl mt-10 p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-5">Estado del árbitro</h2>

          <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-5 py-3 rounded-full">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            Disponible
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Próximos partidos</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <TarjetaPartido
              id={25}
              local="Atlético FC"
              visitante="Juventus"
              cancha="FutZone Norte"
              fecha="15/07/2026"
              hora="6:00 PM"
              categoria="Sub-20"
              estado="Pendiente"
            />

            <TarjetaPartido
              id={26}
              local="Millonarios"
              visitante="Nacional"
              cancha="FutZone Centro"
              fecha="16/07/2026"
              hora="8:00 PM"
              categoria="Libre"
              estado="En Curso"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
