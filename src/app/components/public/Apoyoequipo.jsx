"use client"

import { useState } from "react"

export default function Apoyoequipo() {

    const [voto, setVoto] = useState("")

    const votarEquipo = (equipo) => {
        setVoto(`🔥 Has votado por ${equipo}`)
    }

    const especificacion = (equipo) => {
        alert(`Información detallada de ${equipo}`)
    }

    const siguienteCompetencia = () => {
        alert("⚽ Próximamente más competencias disponibles")
    }

    const registro = () => {
        alert("✅ Registro completado correctamente")
    }

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-black via-emerald-950 to-black text-white overflow-hidden">

                {/* EFECTOS VERDES */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/20 blur-[150px] rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/10 blur-[150px] rounded-full"></div>


                {/* NAVBAR */}
                <header className="flex justify-between items-center px-10 py-5 border-b border-emerald-900/40 backdrop-blur-xl sticky top-0 bg-black/40 z-50">

                    <h1 className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                        FutZone
                    </h1>

                    <div className="flex gap-4">

                        <button
                            onClick={registro}
                            className="bg-emerald-500 hover:bg-emerald-400 duration-300 px-6 py-3 rounded-2xl font-semibold shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all"
                        >
                            Registro
                        </button>

                        <button
                            onClick={siguienteCompetencia}
                            className="border border-emerald-800 hover:border-emerald-400 hover:text-emerald-300 duration-300 px-6 py-3 rounded-2xl backdrop-blur-xl"
                        >
                            Competencias
                        </button>

                    </div>

                </header>



                {/* HERO */}
                <section className="text-center py-28 px-6 relative z-10">

                    <span className="bg-emerald-500/10 text-emerald-300 px-6 py-3 rounded-full border border-emerald-500/20 text-sm backdrop-blur-xl">
                        ⚽ Plataforma premium de votaciones deportivas
                    </span>

                    <h2 className="text-7xl font-black mt-10 leading-tight">

                        Apoya a tu

                        <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                            {" "}equipo favorito
                        </span>

                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto mt-8 text-xl leading-relaxed">
                        Participa en votaciones en tiempo real,
                        descubre nuevas competencias y vive
                        una experiencia deportiva futurista.
                    </p>


                    {/* MENSAJE VOTO */}
                    {
                        voto && (
                            <div className="mt-10 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 inline-block px-8 py-4 rounded-2xl backdrop-blur-xl shadow-xl shadow-emerald-500/10 animate-pulse">
                                {voto}
                            </div>
                        )
                    }

                </section>



                {/* EQUIPOS */}
                <section className="px-10 py-10 relative z-10">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">



                        {/* REAL MADRID */}
                        <div className="group bg-white/5 backdrop-blur-xl rounded-[35px] overflow-hidden border border-white/10 hover:border-emerald-400/40 duration-500 shadow-2xl hover:-translate-y-3 transition-all">

                            <div className="relative overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
                                    alt="Real Madrid"
                                    className="w-full h-[350px] object-cover group-hover:scale-110 duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                <div className="absolute top-5 left-5 bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Real Madrid
                                </div>

                            </div>



                            <div className="p-8">

                                <h3 className="text-5xl font-black">
                                    Real Madrid
                                </h3>

                                <p className="text-slate-400 mt-5 text-lg leading-relaxed">
                                    El club más ganador de Europa.
                                    Participa y demuestra tu apoyo al equipo merengue.
                                </p>



                                <div className="flex gap-5 mt-10 flex-wrap">

                                    <button
                                        onClick={() => votarEquipo("Real Madrid")}
                                        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-emerald-500/30"
                                    >
                                        ⚽ Votar
                                    </button>

                                    <button
                                        onClick={() => especificacion("Real Madrid")}
                                        className="border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-2xl duration-300 backdrop-blur-xl"
                                    >
                                        Especificaciones
                                    </button>

                                </div>

                            </div>

                        </div>





                        {/* BARCELONA */}
                        <div className="group bg-white/5 backdrop-blur-xl rounded-[35px] overflow-hidden border border-white/10 hover:border-green-400/40 duration-500 shadow-2xl hover:-translate-y-3 transition-all">

                            <div className="relative overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop"
                                    alt="Barcelona"
                                    className="w-full h-[350px] object-cover group-hover:scale-110 duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                <div className="absolute top-5 left-5 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Barcelona
                                </div>

                            </div>



                            <div className="p-8">

                                <h3 className="text-5xl font-black">
                                    Barcelona
                                </h3>

                                <p className="text-slate-400 mt-5 text-lg leading-relaxed">
                                    Vive la pasión blaugrana y participa
                                    en las competencias más importantes.
                                </p>



                                <div className="flex gap-5 mt-10 flex-wrap">

                                    <button
                                        onClick={() => votarEquipo("Barcelona")}
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-green-500/30"
                                    >
                                        ⚽ Votar
                                    </button>

                                    <button
                                        onClick={() => especificacion("Barcelona")}
                                        className="border border-white/10 hover:border-green-400 hover:bg-green-500/10 px-8 py-4 rounded-2xl duration-300 backdrop-blur-xl"
                                    >
                                        Especificaciones
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>





                {/* SIGUIENTES COMPETENCIAS */}
                <section className="px-10 py-24 relative z-10">

                    <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl shadow-2xl">

                        <div className="flex justify-between items-center flex-wrap gap-5">

                            <div>

                                <h2 className="text-5xl font-black">
                                    Próximas competencias
                                </h2>

                                <p className="text-slate-400 mt-4 text-lg">
                                    Descubre los próximos enfrentamientos.
                                </p>

                            </div>

                            <button
                                onClick={siguienteCompetencia}
                                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105 duration-300 px-7 py-4 rounded-2xl font-bold shadow-2xl shadow-emerald-500/20"
                            >
                                Ver competencias
                            </button>

                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">

                            {
                                [
                                    "PSG vs Liverpool",
                                    "Chelsea vs Milan",
                                    "Arsenal vs Juventus"
                                ].map((partido, index) => (

                                    <div
                                        key={index}
                                        className="bg-black/30 border border-white/10 rounded-3xl p-7 hover:border-emerald-400/40 hover:-translate-y-2 transition-all duration-300"
                                    >

                                        <h3 className="text-3xl font-bold">
                                            {partido}
                                        </h3>

                                        <button
                                            onClick={siguienteCompetencia}
                                            className="mt-7 bg-emerald-500 hover:bg-emerald-400 duration-300 px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20"
                                        >
                                            Ver competencia
                                        </button>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </section>





                {/* FOOTER */}
                <footer className="border-t border-white/10 py-10 text-center text-slate-500 relative z-10">

                    FutZone © 2026 — Plataforma deportiva premium

                </footer>

            </main>
        </>
    )
}