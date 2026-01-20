export default function Development() {
    return (
        <section className="py-20 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Desarrollo</h1>

            {/* Resumen profesional */}
            <p className="text-zinc-400 mb-6">
                Soy <strong>Desarrollador de Software</strong> con experiencia en desarrollo
                <strong> Backend, Frontend y sistemas ERP</strong>. Actualmente trabajo en
                Evidence Technology, participando en el desarrollo, mantenimiento y
                optimización de aplicaciones web empresariales.
            </p>

            <p className="text-zinc-400 mb-6">
                Mi experiencia incluye la implementación de <strong>lógica de negocio,
                    funcionalidades avanzadas, pruebas e integración</strong>, así como la
                resolución de incidencias en entornos productivos.
            </p>

            <p className="text-zinc-400 mb-12">
                He trabajado con tecnologías como
                <strong> PHP, JavaScript, TypeScript, Python, Node.js, Laravel,
                    CodeIgniter y Vue.js</strong>, integrando bases de datos relacionales y
                no relacionales.
            </p>

            {/* Stack tecnológico */}
            <div className="mb-14">
                <h2 className="text-xl font-semibold mb-4">Stack tecnológico</h2>

                <div className="flex flex-wrap gap-3">
                    {[
                        'PHP',
                        'Laravel',
                        'CodeIgniter',
                        'JavaScript',
                        'TypeScript',
                        'Node.js',
                        'Vue.js',
                        'React',
                        'MySQL',
                        'PostgreSQL',
                        'Git',
                        'Docker',
                    ].map(skill => (
                        <span
                            key={skill}
                            className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Especialización */}
            <div className="mb-14">
                <h2 className="text-xl font-semibold mb-6">Áreas de especialización</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Backend & ERP</h3>
                        <p className="text-zinc-400 text-sm">
                            Desarrollo y optimización de módulos empresariales,
                            lógica de negocio, reportes, integraciones y mantenimiento
                            de sistemas ERP en producción.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Frontend</h3>
                        <p className="text-zinc-400 text-sm">
                            Interfaces web modernas, mantenibles y orientadas a la
                            experiencia de usuario utilizando frameworks modernos.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Automatización & IA</h3>
                        <p className="text-zinc-400 text-sm">
                            Desarrollo de proyectos personales y profesionales enfocados
                            en automatización de procesos y sistemas con inteligencia artificial.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">Buenas prácticas</h3>
                        <p className="text-zinc-400 text-sm">
                            Código limpio, control de versiones, pruebas,
                            documentación y enfoque en soluciones escalables.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
                <a
                    href="cv/Curriculum-Vitae-Jesus-Garcia.pdf"
                    download
                    className="
            inline-flex items-center gap-2
            px-6 py-3 rounded-lg
            bg-indigo-600 hover:bg-indigo-700
            transition-colors
            text-white font-medium
          "
                >
                    📄 Descargar CV
                </a>

                <a
                    href="/proyectos"
                    className="
            px-6 py-3 rounded-lg
            border border-zinc-700
            hover:bg-zinc-800
            transition
          "
                >
                    Ver proyectos
                </a>
            </div>
        </section>
    )
}
