import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden">
            {/* Fondo con degradado */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900/30 via-zinc-950 to-purple-900/30" />

            {/* Glow decorativo */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10" />

            <div className="py-20 md:py-32 text-center px-4">
                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold mb-6"
                >
                    {t('home.title_part1')}{' '}
                    <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        {t('home.title_part2')}
                    </span>
                </motion.h1>

                {/* Descripción */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="max-w-2xl mx-auto text-zinc-400 text-lg mb-12"
                >
                    {t('home.description')}
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
              bg-linear-to-r from-indigo-600 to-indigo-500
              hover:from-indigo-500 hover:to-indigo-600
              transition-all duration-300
              text-white font-medium
              shadow-lg shadow-indigo-600/30
            "
                    >
                        {t('home.view_projects')}
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
                        {t('home.listen_music')}
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
