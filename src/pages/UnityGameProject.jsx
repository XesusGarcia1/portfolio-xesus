import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function UnityGameProject() {
    const { t } = useTranslation()

    return (
        <section className="py-12 max-w-5xl mx-auto px-4">
            <div className="mb-12">
                <a href="/proyectos" className="text-zinc-500 hover:text-indigo-400 text-sm flex items-center gap-2 mb-4 transition">
                    {t('projects.back_to_projects')}
                </a>
                <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block mb-4">
                    {t('projects.items.unity.name')}
                </h1>
                <p className="text-zinc-400 text-lg max-w-3xl">
                    {t('projects.items.unity.demo_desc')}
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
                            {t('projects.items.unity.wip')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Detalles Técnicos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold mb-6 text-white">{t('projects.items.unity.about_title')}</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        <p className="text-zinc-400 text-lg max-w-3xl">
                            {t('projects.items.unity.about_p1')}
                        </p>
                        <p>
                            {t('projects.items.unity.about_p2')}
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">{t('projects.items.unity.technologies')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Unity Engine', 'C#'].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">{t('projects.items.unity.skills')}</h3>
                        <ul className="text-sm text-zinc-400 space-y-2">
                            {t('projects.items.unity.skills_items', { returnObjects: true }).map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-linear-to-r from-zinc-900 to-zinc-800 rounded-3xl p-8 text-center border border-zinc-700/50">
                <h3 className="text-lg font-semibold mb-2">{t('projects.items.unity.cta_title')}</h3>
                <p className="text-sm text-zinc-400 mb-6">{t('projects.items.unity.cta_desc')}</p>
                <a
                    href="/contacto"
                    className="inline-block px-6 py-2 bg-white text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition"
                >
                    {t('projects.items.unity.cta_button')}
                </a>
            </div>
        </section>
    )
}
