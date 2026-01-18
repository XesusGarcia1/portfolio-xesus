import { motion } from 'framer-motion'

export default function Home() {
    return (
        <section className="relative overflow-hidden">
            {/* Fondo con degradado */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/30 via-zinc-950 to-purple-900/30" />

            {/* Glow decorativo */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />

            <div className="py-32 text-center px-4">
                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold mb-6"
                >
                    Desarrollador Web &{' '}
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Creador Musical
                    </span>
                </motion.h1>

                {/* Descripción */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="max-w-2xl mx-auto text-zinc-400 text-lg mb-12"
                >
                    Construyo soluciones web modernas y desarrollo proyectos creativos
                    combinando tecnología y música electrónica.
                </motion.p>

                {/* Botones */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="/proyectos"
                        className="
              px-7 py-3 rounded-xl
              bg-gradient-to-r from-indigo-600 to-indigo-500
              hover:from-indigo-500 hover:to-indigo-600
              transition-all duration-300
              text-white font-medium
              shadow-lg shadow-indigo-600/30
            "
                    >
                        Ver proyectos
                    </a>

                    <a
                        href="/musica"
                        className="
              px-7 py-3 rounded-xl
              border border-zinc-700
              hover:bg-zinc-800
              transition-all duration-300
            "
                    >
                        Escuchar música
                    </a>
                </motion.div>
            </div>
        </section>
    )
}