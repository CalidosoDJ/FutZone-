"use client";

import { useState } from "react";

export default function MuroC() {
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const [rating, setRating] = useState(5);

    const [likes, setLikes] = useState({});

    const stats = [
        {
            title: "Usuarios Activos",
            value: "12.4K",
            icon: "👥",
        },
        {
            title: "Reseñas Publicadas",
            value: "4.8K",
            icon: "⭐",
        },
        {
            title: "Reportes Solucionados",
            value: "1.2K",
            icon: "✅",
        },
    ];

    const reviews = [
        {
            id: 1,
            user: "Carlos Ramírez",
            category: "Canchas",
            rating: 5,
            image:
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
            comment:
                "Excelente cancha sintética, iluminación profesional y reservas rápidas.",
            date: "09 Jun 2026",
            time: "08:45 PM",
            likes: 42,
        },
        {
            id: 2,
            user: "Laura Gómez",
            category: "Plataforma",
            rating: 4,
            image:
                "https://images.unsplash.com/photo-1518604666860-9ed391f76460",
            comment:
                "La plataforma es muy intuitiva. Me gustaría mejorar las notificaciones.",
            date: "09 Jun 2026",
            time: "06:20 PM",
            likes: 31,
        },
        {
            id: 3,
            user: "Daniel Torres",
            category: "Errores",
            rating: 3,
            image:
                "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
            comment:
                "Encontré un error al reservar desde dispositivos móviles.",
            date: "08 Jun 2026",
            time: "09:10 PM",
            likes: 12,
        },
    ];

    const filteredReviews =
        selectedCategory === "Todas"
            ? reviews
            : reviews.filter((item) => item.category === selectedCategory);

    const topFields = [
        {
            name: "FutZone Elite",
            score: "4.9",
            city: "Bogotá",
        },
        {
            name: "Green Soccer Arena",
            score: "4.8",
            city: "Medellín",
        },
        {
            name: "Champions Field",
            score: "4.7",
            city: "Cali",
        },
    ];

    const reports = [
        {
            id: 1,
            title: "Problema de reservas",
            priority: "Alta",
            status: "En proceso",
        },
        {
            id: 2,
            title: "Error en pagos",
            priority: "Crítica",
            status: "Solucionado",
        },
        {
            id: 3,
            title: "Fallo en notificaciones",
            priority: "Media",
            status: "Pendiente",
        },
    ];

    const handleLike = (id) => {
        setLikes((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* NAVBAR */}

            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center font-bold text-xl">
                            ⚽
                        </div>

                        <h1 className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-green-200 bg-clip-text text-transparent">
                            FutZone
                        </h1>
                    </div>

                    <div className="hidden md:flex gap-8 font-medium">
                        <button className="hover:text-emerald-400 transition">
                            Inicio
                        </button>

                        <button className="hover:text-emerald-400 transition">
                            Comunidad
                        </button>

                        <button className="hover:text-emerald-400 transition">
                            Soporte
                        </button>

                        <button className="hover:text-emerald-400 transition">
                            Mi Perfil
                        </button>
                    </div>
                </div>
            </nav>

            {/* HERO */}

            <section className="relative overflow-hidden">

                <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl top-0 left-0"></div>

                <div className="absolute w-[500px] h-[500px] bg-green-300/10 rounded-full blur-3xl bottom-0 right-0"></div>

                <div className="container mx-auto px-6 py-24 text-center relative">

                    <div className="inline-flex px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
                        Comunidad Deportiva Premium
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight">

                        Comparte tu experiencia en

                        <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent">
                            FutZone Community
                        </span>

                    </h1>

                    <p className="max-w-3xl mx-auto mt-6 text-slate-300 text-lg">
                        Publica reseñas, reporta errores, califica canchas y conecta con
                        miles de jugadores en la comunidad deportiva más moderna.
                    </p>

                    <button className="mt-10 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 transition font-bold shadow-xl shadow-emerald-500/30">
                        Crear Reseña
                    </button>

                </div>
            </section>

            {/* ESTADISTICAS */}

            <section className="container mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:scale-105 transition"
                        >
                            <div className="text-4xl mb-3">{item.icon}</div>

                            <h3 className="text-slate-400">{item.title}</h3>

                            <p className="text-4xl font-black text-emerald-400">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FORMULARIO */}

            <section className="container mx-auto px-6 py-16">

                <div className="rounded-[35px] bg-white/5 backdrop-blur-xl border border-white/10 p-8">

                    <h2 className="text-3xl font-black mb-8">
                        Publicar Nueva Reseña
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none"
                            placeholder="Nombre de usuario"
                        />

                        <select className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4">
                            <option>Canchas</option>
                            <option>Plataforma</option>
                            <option>Errores</option>
                        </select>

                        <textarea
                            rows="5"
                            className="md:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4"
                            placeholder="Comparte tu experiencia..."
                        />

                        <input
                            type="file"
                            className="md:col-span-2 bg-slate-900 border border-slate-700 rounded-2xl p-4"
                        />

                        <div className="flex gap-2">

                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`text - 3xl ${star <= rating
                                        ? "text-yellow-400"
                                        : "text-slate-600"
                                        } `}
                                >
                                    ★
                                </button>
                            ))}

                        </div>

                        <button className="px-6 py-4 rounded-2xl bg-emerald-500 font-bold hover:bg-emerald-600 transition">
                            Publicar
                        </button>

                    </div>
                </div>
            </section>

            {/* FILTROS */}

            <section className="container mx-auto px-6">

                <div className="flex flex-wrap gap-3 mb-10">

                    {["Todas", "Canchas", "Plataforma", "Errores"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px - 5 py - 3 rounded - xl ${selectedCategory === category
                                ? "bg-emerald-500"
                                : "bg-slate-800"
                                } `}
                        >
                            {category}
                        </button>
                    ))}

                </div>
            </section>

            {/* FEED */}

            <section className="container mx-auto px-6 py-10">

                <div className="grid gap-8">

                    {filteredReviews.map((review) => (

                        <div
                            key={review.id}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden hover:border-emerald-500/50 transition"
                        >
                            <img
                                src={review.image}
                                alt=""
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-8">

                                <div className="flex justify-between flex-wrap gap-4">

                                    <div>

                                        <h3 className="font-bold text-xl">
                                            {review.user}
                                        </h3>

                                        <p className="text-slate-400">
                                            {review.date} • {review.time}
                                        </p>

                                    </div>

                                    <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl">
                                        {review.category}
                                    </span>

                                </div>

                                <div className="mt-4 text-yellow-400 text-xl">
                                    {"★".repeat(review.rating)}
                                </div>

                                <p className="mt-4 text-slate-300">
                                    {review.comment}
                                </p>

                                <div className="flex gap-4 mt-6">

                                    <button
                                        onClick={() => handleLike(review.id)}
                                        className={`px - 5 py - 3 rounded - xl ${likes[review.id]
                                            ? "bg-emerald-500"
                                            : "bg-slate-800"
                                            } `}
                                    >
                                        👍 {review.likes}
                                    </button>

                                    <button className="px-5 py-3 rounded-xl bg-slate-800">
                                        Responder
                                    </button>

                                </div>

                            </div>
                        </div>

                    ))}

                </div>
            </section>

            {/* SOPORTE */}

            <section className="container mx-auto px-6 py-20">

                <h2 className="text-4xl font-black mb-10">
                    Centro de Soporte
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {reports.map((report) => (
                        <div
                            key={report.id}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6"
                        >
                            <h3 className="font-bold text-xl mb-3">
                                {report.title}
                            </h3>

                            <p className="text-slate-300">
                                Prioridad: {report.priority}
                            </p>

                            <p className="text-emerald-400 mt-2">
                                Estado: {report.status}
                            </p>

                        </div>
                    ))}

                </div>
            </section>

            {/* RANKING */}

            <section className="container mx-auto px-6 py-20">

                <h2 className="text-4xl font-black mb-10">
                    Ranking de Canchas
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {topFields.map((field, index) => (

                        <div
                            key={index}
                            className="bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-500/20 rounded-3xl p-8"
                        >
                            <div className="text-5xl mb-4">
                                🏆
                            </div>

                            <h3 className="font-bold text-2xl">
                                {field.name}
                            </h3>

                            <p className="text-slate-300 mt-2">
                                {field.city}
                            </p>

                            <p className="text-emerald-400 text-3xl font-black mt-4">
                                {field.score}
                            </p>

                        </div>

                    ))}

                </div>
            </section>

            {/* FOOTER */}

            <footer className="border-t border-slate-800 mt-20">

                <div className="container mx-auto px-6 py-10">

                    <div className="flex flex-col md:flex-row justify-between gap-8">

                        <div>
                            <h2 className="text-3xl font-black text-emerald-400">
                                FutZone
                            </h2>

                            <p className="text-slate-400 mt-3">
                                Comunidad deportiva premium para jugadores y amantes del fútbol.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-3">
                                Navegación
                            </h3>

                            <ul className="space-y-2 text-slate-400">
                                <li>Inicio</li>
                                <li>Comunidad</li>
                                <li>Soporte</li>
                                <li>Perfil</li>
                            </ul>
                        </div>

                    </div>

                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
                        © 2026 FutZone. Todos los derechos reservados.
                    </div>

                </div>
            </footer>

        </div>
    );
}

