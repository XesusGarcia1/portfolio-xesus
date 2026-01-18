export default function Projects() {
    return (
        <section className="py-20 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Proyectos</h1>

            <p className="text-zinc-400 mb-12">
                Una selección de proyectos profesionales y personales en los que he
                trabajado, enfocados en desarrollo web, sistemas empresariales e
                iniciativas creativas.
            </p>

            {/* Proyectos profesionales */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">
                    Proyectos profesionales
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Proyecto 1 */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            Sistema de evaluación de personal (CFE)
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            Desarrollo de una aplicación web para la evaluación y gestión de
                            personal temporal, mejorando la organización y estandarización de
                            procesos internos.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Vue.js', 'CodeIgniter', 'MySQL', 'Correo SMTP'].map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-zinc-500 text-xs mb-4">
                            Rol: Desarrollo Frontend & Backend
                        </p>

                        <div className="flex gap-3">
                            <span className="text-xs text-zinc-500 italic">
                                Proyecto interno / confidencial
                            </span>
                        </div>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            Módulos ERP empresariales
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            Desarrollo, mantenimiento y optimización de módulos ERP en
                            producción, enfocados en reportes, lógica de negocio y
                            automatización de procesos empresariales.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Git'].map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-zinc-500 text-xs mb-4">
                            Rol: Backend Developer
                        </p>

                        <span className="text-xs text-zinc-500 italic">
                            Proyecto empresarial en producción
                        </span>
                    </div>
                </div>
            </div>

            {/* Proyectos personales */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">
                    Proyectos personales
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Proyecto IA */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            Chatbot con Inteligencia Artificial
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            Proyecto personal enfocado en la exploración de sistemas
                            conversacionales, integración de IA y automatización de respuestas.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['Python', 'API', 'IA', 'Frontend Web'].map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/proyectos/chatbot"
                                className="text-sm text-indigo-400 hover:underline"
                            >
                                Ver detalles
                            </a>
                        </div>
                    </div>

                    {/* Proyecto Portafolio */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            Portafolio Web Personal
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            Sitio web personal desarrollado para mostrar mi perfil profesional
                            como desarrollador y creador musical, combinando diseño moderno y
                            contenido real.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="/proyectos/portafolio"
                                className="text-sm text-indigo-400 hover:underline"
                            >
                                Ver detalles
                            </a>
                        </div>
                    </div>
                    {/* Game Dev & Experimentos */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-semibold mb-6">
                            Game Dev & Experimentos
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                                <h3 className="text-lg font-semibold mb-2">
                                    Videojuego en Unity — En desarrollo
                                </h3>

                                <p className="text-zinc-400 text-sm mb-4">
                                    Proyecto personal de videojuego desarrollado en Unity, enfocado en
                                    mecánicas de juego, control de estados, lógica de colisiones y
                                    arquitectura de sistemas.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {['Unity', 'C#', 'Game Design', 'State Machines'].map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-zinc-500 text-xs mb-4">
                                    Estado: En desarrollo continuo (sin fecha definida)
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href="/proyectos/unity-game"
                                        className="text-sm text-indigo-400 hover:underline"
                                    >
                                        Ver evidencia
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <a
                    href="/contacto"
                    className="
            inline-block px-8 py-3 rounded-xl
            bg-indigo-600 hover:bg-indigo-700
            transition text-white font-medium
          "
                >
                    ¿Tienes un proyecto en mente?
                </a>
            </div>
        </section>
    )
}
