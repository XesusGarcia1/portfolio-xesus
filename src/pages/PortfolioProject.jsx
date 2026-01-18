import { motion } from 'framer-motion'

export default function PortfolioProject() {
    const features = [
        {
            title: "Diseño Premium",
            description: "Uso de degradados animados, efectos de auras (glows) y tipografía moderna para una experiencia visual de alto nivel.",
            icon: "✨"
        },
        {
            title: "Interactividad Avanzada",
            description: "Integración de Framer Motion para transiciones suaves, modales dinámicos y un chatbot funcional para engagement del usuario.",
            icon: "🎮"
        },
        {
            title: "Optimización de Media",
            description: "Sistema inteligente de reproducción de música (Spotify) y video (TikTok) que evita solapamiento de audio y optimiza la carga.",
            icon: "🎵"
        },
        {
            title: "Arquitectura Escalable",
            description: "Desarrollado con React y Vite, utilizando un sistema de rutas limpio y componentes reutilizables.",
            icon: "🏗️"
        }
    ];

    const techStack = [
        "React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "React Router 7", "Spotify Web API"
    ];

    return (
        <section className="py-12 max-w-5xl mx-auto px-4">
            <div className="mb-12">
                <a href="/proyectos" className="text-zinc-500 hover:text-indigo-400 text-sm flex items-center gap-2 mb-4 transition">
                    ← Volver a proyectos
                </a>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block mb-4">
                    Portafolio Web Personal
                </h1>
                <p className="text-zinc-400 text-lg max-w-3xl">
                    Este proyecto es mucho más que una carta de presentación; es una plataforma interactiva diseñada para fusionar mi identidad como desarrollador y productor musical.
                </p>
            </div>

            {/* Stack Tecnológico */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold mb-6">Stack Tecnológico</h2>
                <div className="flex flex-wrap gap-3">
                    {techStack.map(tech => (
                        <span key={tech} className="px-5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Características principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
                    >
                        <div className="text-3xl mb-4">{f.icon}</div>
                        <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {f.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Galería / Mockup Concept */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 p-2">
                <div className="bg-zinc-950 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Glow decorativo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

                    <h2 className="text-2xl font-bold mb-6 relative z-10">Filosofía del Proyecto</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 relative z-10">
                        "La tecnología y el arte no son disciplinas separadas, sino capas de una misma experiencia.
                        Este proyecto fue concebido como un espacio donde cada decisión técnica —desde la arquitectura
                        hasta las animaciones— tiene un propósito claro: mejorar la forma en que el usuario percibe
                        y consume el contenido.

                        El enfoque principal no fue la complejidad, sino la claridad, el rendimiento y la coherencia.
                        Cada componente es reutilizable, cada animación es sutil y cada integración externa está pensada
                        para aportar valor real, no solo impacto visual."
                    </p>

                    <div className="flex justify-center gap-4 relative z-10">
                        <div className="px-4 py-2 bg-indigo-600/20 rounded-full border border-indigo-500/30 text-xs text-indigo-300">
                            Performance Optimized
                        </div>
                        <div className="px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 text-xs text-purple-300">
                            Mobile First
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="mt-16 text-center">
                <a
                    href="https://github.com/tu-usuario/tu-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition shadow-xl"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    Ver Código en GitHub
                </a>
            </div> */}
        </section>
    )
}
