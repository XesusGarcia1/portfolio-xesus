export default function Contact() {
    return (
        <section className="py-20 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Contacto</h1>

            <p className="text-zinc-400 mb-12 max-w-2xl">
                Estoy abierto a nuevas oportunidades, colaboraciones creativas y
                conversaciones técnicas. Si tienes un proyecto en mente o simplemente
                quieres conectar, no dudes en escribirme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {/* Email */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">Correo electrónico</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        La forma más directa de contactarme.
                    </p>
                    <a
                        href="mailto:xesusgmusic@gmail.com"
                        className="text-indigo-400 hover:underline text-sm"
                    >
                        xesusgmusic@gmail.com
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        Conectemos profesionalmente.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/xesusgarcia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                    >
                        linkedin.com/in/xesusgarcia
                    </a>
                </div>

                {/* GitHub */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">GitHub</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        Repositorios y proyectos personales.
                    </p>
                    <a
                        href="https://github.com/XesusGarcia1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                    >
                        github.com/XesusGarcia1
                    </a>
                </div>

                {/* Música */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">Proyecto musical</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        Para colaboraciones o proyectos creativos.
                    </p>
                    <a
                        href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                    >
                        Spotify · Xesus Garcia
                    </a>
                </div>
            </div>

            <div className="text-center">
                <a
                    href="mailto:xesusgmusic@gmail.com"
                    className="
            inline-block px-8 py-3 rounded-xl
            bg-indigo-600 hover:bg-indigo-700
            transition text-white font-medium
          "
                >
                    Hablemos
                </a>
            </div>
        </section>
    )
}
