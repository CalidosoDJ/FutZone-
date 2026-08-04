"use client";

import SidebarArbitro from "./SidebarArbitro";
import TarjetaNotificacion from "./TarjetaNotificacion";

export default function NotificacionArbitro() {
  const notificaciones = [
    {
      id: 1,
      icono: "⚽",
      titulo: "Nuevo partido asignado",
      descripcion:
        "Se te asignó el partido Atlético FC vs Juventus para el día 15 de julio.",
      tiempo: "Hace 5 minutos",
      leida: false,
    },
    {
      id: 2,
      icono: "📅",
      titulo: "Cambio de horario",
      descripcion:
        "El partido Millonarios vs Nacional fue reprogramado para las 8:00 PM.",
      tiempo: "Hace 30 minutos",
      leida: false,
    },
    {
      id: 3,
      icono: "✅",
      titulo: "Resumen aprobado",
      descripcion:
        "El resumen del partido Barcelona vs Real Madrid fue aprobado.",
      tiempo: "Hace 2 horas",
      leida: true,
    },
    {
      id: 4,
      icono: "🔔",
      titulo: "Actualización del sistema",
      descripcion: "Se realizaron mejoras en el módulo de árbitros.",
      tiempo: "Ayer",
      leida: true,
    },
  ];
  return (
    <main className="bg-gray-100 min-h-screen">
      <SidebarArbitro />

      <section className="ml-72 min-h-screen px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                🔔 Notificaciones
              </h1>

              <p className="mt-2 text-slate-600">
                Consulta las novedades relacionadas con tus partidos y
                actividades como árbitro.
              </p>
            </div>

            <div className="bg-green-100 border border-green-200 rounded-xl px-5 py-3">
              <p className="text-sm font-semibold text-green-700">
                3 Notificaciones nuevas
              </p>
            </div>
          </header>
          <section className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 mb-8">
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2 rounded-full bg-green-600 text-white font-semibold transition">
                Todas
              </button>

              <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">
                No leídas
              </button>

              <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">
                Partidos
              </button>

              <button className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition">
                Sistema
              </button>
            </div>
          </section>
          <section className="space-y-5">
            {notificaciones.map((notificacion) => (
              <TarjetaNotificacion
                key={notificacion.id}
                icono={notificacion.icono}
                titulo={notificacion.titulo}
                descripcion={notificacion.descripcion}
                tiempo={notificacion.tiempo}
                leida={notificacion.leida}
              />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
