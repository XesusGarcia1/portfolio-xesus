import { motion } from 'framer-motion'

export default function UnityGameProject() {
    return (
        <section className="py-12 max-w-5xl mx-auto px-4">
            <div className="mb-12">
                <a href="/proyectos" className="text-zinc-500 hover:text-indigo-400 text-sm flex items-center gap-2 mb-4 transition">
                    ← Volver a proyectos
                </a>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block mb-4">
                    Videojuego en Unity
                </h1>
                <p className="text-zinc-400 text-lg max-w-3xl">
                    Demostración técnica de mecánicas, sistemas y arquitectura desarrollados en C# para Unity.
                    Este proyecto se centra en la solidez del código y la fluidez de las interacciones.
                </p>
            </div>

            {/* Video Player Section */}
            <div className="mb-16">
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 aspect-video relative group">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        poster="/gamePreview/thumbnail.jpg" // Opcional si decides añadir una
                    >
                        <source src="/gamePreview/GamePreview.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>

                    {/* Overlay informativo (se oculta al dar play en la mayoría de navegadores) */}
                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-zinc-300 border border-white/10">
                            Work in Progress
                        </span>
                    </div>
                </div>
            </div>

            {/* Detalles Técnicos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold mb-6 text-white">Sobre el desarrollo</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        <p className="text-zinc-400 text-lg max-w-3xl">
                            Este proyecto corresponde a un <strong>videojuego experimental desarrollado en Unity </strong>
                            como parte de mi proceso de aprendizaje en Game Development. No se trata de un producto final
                            ni cuenta con una fecha de lanzamiento definida; su propósito principal es la exploración
                            técnica, el diseño de sistemas y la aplicación de buenas prácticas en C# dentro del motor.
                        </p>
                        <p>
                            Este proyecto fue concebido como un entorno de prueba y aprendizaje continuo,
                            enfocado en experimentar con <strong>arquitecturas escalables y mantenibles </strong>
                            dentro de Unity. El objetivo no es la finalización del videojuego como producto,
                            sino la implementación y validación de sistemas fundamentales utilizados en el
                            desarrollo de videojuegos.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Tecnologías</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Unity Engine', 'C#'].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Habilidades Aplicadas</h3>
                        <ul className="text-sm text-zinc-400 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                                Programación Orientada a Objetos
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                                State Machines & Managers
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                                UI / UX en Juegos
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 text-center border border-zinc-700/50">
                <h3 className="text-lg font-semibold mb-2">¿Quieres saber más sobre la arquitectura?</h3>
                <p className="text-sm text-zinc-400 mb-6">Estoy abierto a discutir decisiones técnicas y colaboraciones en Game Dev.</p>
                <a
                    href="/contacto"
                    className="inline-block px-6 py-2 bg-white text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition"
                >
                    Hablemos
                </a>
            </div>
        </section>
    )
}
