export default function Achievements() {
    return (
        <section className="py-20 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Logros</h1>

            <p className="text-zinc-400 mb-12 max-w-3xl">
                A lo largo de mi trayectoria profesional y creativa, he alcanzado distintos
                hitos que reflejan mi crecimiento como desarrollador y creador musical,
                así como mi compromiso con el aprendizaje continuo y la calidad técnica.
            </p>

            {/* Logros profesionales */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Logros profesionales</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Participación en sistemas ERP en producción</h3>
                        <p className="text-zinc-400 text-sm">
                            Desarrollo, mantenimiento y optimización de módulos empresariales utilizados
                            activamente por usuarios finales, contribuyendo a la estabilidad y evolución
                            del sistema.
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Implementación de soluciones web empresariales</h3>
                        <p className="text-zinc-400 text-sm">
                            Desarrollo de aplicaciones web orientadas a la automatización de procesos,
                            mejora de flujos internos y estandarización de operaciones.
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Uso de IA como herramienta de productividad</h3>
                        <p className="text-zinc-400 text-sm">
                            Integración de herramientas de inteligencia artificial como apoyo en el análisis,
                            documentación, prototipado y validación de soluciones técnicas.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Logros creativos */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Logros creativos y musicales</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Publicación de música original</h3>
                        <p className="text-zinc-400 text-sm">
                            Lanzamiento de producciones musicales propias bajo el proyecto artístico
                            <strong> Xesus Garcia</strong>, disponibles en plataformas de streaming como
                            Spotify, YouTube y SoundCloud.
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Construcción de una identidad artística</h3>
                        <p className="text-zinc-400 text-sm">
                            Desarrollo de un estilo musical definido dentro de géneros electrónicos,
                            enfocado en energía, atmósfera y aplicación audiovisual.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Logros personales */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Crecimiento y aprendizaje</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Desarrollo continuo de proyectos personales</h3>
                        <p className="text-zinc-400 text-sm">
                            Creación de proyectos propios en desarrollo web, inteligencia artificial
                            y game development como medio de aprendizaje y experimentación técnica.
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Exploración de tecnologías modernas</h3>
                        <p className="text-zinc-400 text-sm">
                            Uso activo de frameworks modernos, herramientas de automatización y nuevas
                            tecnologías para mantenerme actualizado y mejorar la calidad del trabajo.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Cierre */}
            <div className="text-center">
                <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
                    Estos logros representan etapas de un proceso en constante evolución,
                    con enfoque en la mejora continua, la curiosidad técnica y la creación
                    de soluciones con impacto real.
                </p>
            </div>
        </section>
    )
}
