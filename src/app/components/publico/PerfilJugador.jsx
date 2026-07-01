"use client";

import { useState } from "react";

export default function PerfilJugador() {

    // TODOS TUS useState VAN AQUÍ
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nivelDeportivo, setNivelDeportivo] = useState("");

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col">

            {/* HEADER */}
            <header className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white shadow-xl">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-black">
                            ⚽ FutZone
                        </h1>

                        <p className="text-green-100">
                            Mi Perfil
                        </p>
                    </div>

                    <nav className="hidden md:flex gap-6 font-semibold">
                        <button className="hover:text-yellow-300 transition">
                            Inicio
                        </button>

                        <button className="hover:text-yellow-300 transition">
                            Reservas
                        </button>

                        <button className="hover:text-yellow-300 transition">
                            Torneos
                        </button>

                        <button className="hover:text-yellow-300 transition">
                            Perfil
                        </button>
                    </nav>
                </div>
            </header>

            {/* CONTENIDO */}
            <main className="flex-1 max-w-7xl mx-auto p-6 w-full">

                {/* AQUÍ PEGAS TODO EL CÓDIGO DEL PERFIL */}

                <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-3xl p-8 shadow-2xl mb-8">
                    <h1 className="text-5xl font-black">
                        👤 Mi Perfil
                    </h1>

                    <p className="text-green-100 mt-2">
                        Administra tu información personal
                    </p>
                </div>

                {/* FOTO PERFIL */}
                {/* DATOS PERSONALES */}
                {/* CAMBIAR CONTRASEÑA */}
                {/* NIVEL DEPORTIVO */}
                {/* TODO TU CÓDIGO ACTUAL VA AQUÍ */}

            </main>

            {/* FOOTER */}
            <footer className="bg-slate-900 text-white mt-10">
                <div className="max-w-7xl mx-auto px-6 py-8">

                    <div className="grid md:grid-cols-3 gap-8">

                        <div>
                            <h2 className="text-2xl font-black text-green-500">
                                ⚽ FutZone
                            </h2>

                            <p className="text-gray-400 mt-3">
                                Plataforma para la gestión de reservas,
                                torneos y jugadores.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-3">
                                Navegación
                            </h3>

                            <ul className="space-y-2 text-gray-400">
                                <li>Inicio</li>
                                <li>Torneos</li>
                                <li>Reservas</li>
                                <li>Mi Perfil</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-3">
                                Contacto
                            </h3>

                            <ul className="space-y-2 text-gray-400">
                                <li>soporte@futzone.com</li>
                                <li>+57 300 123 4567</li>
                                <li>Cali - Colombia</li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-500">
                        © 2026 FutZone. Todos los derechos reservados.
                    </div>

                </div>
            </footer>

        </div>
    );
}
