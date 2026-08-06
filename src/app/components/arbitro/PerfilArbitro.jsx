"use client";

import {
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaMedal,
  FaCalendarAlt,
  FaFutbol,
  FaEdit,
} from "react-icons/fa";
import InfoItem from "./InfoItem";
import CardDato from "./CardDato";
import { useArbitro } from "@/app/context/ArbitroContext";

export default function PerfilArbitro({ onEditar }) {
  
 const { arbitro } = useArbitro(); 
   

  return (
    <section className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Encabezado */}

      <div className="h-40 bg-gradient-to-r from-green-600 to-emerald-500"></div>

      <div className="px-8 pb-8">

        {/* Foto */}

        <div className="-mt-16 flex flex-col items-center">

          <img
            src={arbitro.foto}
            alt={arbitro.nombre}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <h2 className="text-3xl font-bold mt-4 text-slate-800">
            {arbitro.nombre}
          </h2>

          <p className="text-gray-500">
            {arbitro.categoria}
          </p>

          <button
            onClick={onEditar}
            className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaEdit />
            Editar Perfil
          </button>

        </div>

        {/* Información */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          <InfoItem
            icon={<FaEnvelope />}
            titulo="Correo Electrónico"
            valor={arbitro.correo}
          />

          <InfoItem
            icon={<FaPhoneAlt />}
            titulo="Teléfono"
            valor={arbitro.telefono}
          />

          <InfoItem
            icon={<FaMapMarkerAlt />}
            titulo="Ciudad"
            valor={arbitro.ciudad}
          />

          <InfoItem
            icon={<FaCalendarAlt />}
            titulo="Fecha de ingreso"
            valor={arbitro.ingreso}
          />

        </div>

        {/* Estadísticas */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <CardDato
            icon={<FaFutbol />}
            titulo="Partidos Arbitrados"
           valor={arbitro.partidosDirigidos}
            color="text-green-600"
          />

          <CardDato
            icon={<FaStar />}
            titulo="Calificación"
            valor={arbitro.calificacion}
            color="text-yellow-500"
          />

          <CardDato
            icon={<FaMedal />}
            titulo="Categoría"
            valor="A"
            color="text-blue-600"
          />

        </div>

      </div>

    </section>
  );
}

  
