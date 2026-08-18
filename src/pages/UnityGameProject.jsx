import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function UnityGameProject() {
    const { t } = useTranslation()

    const enemies = [
        { key: 'bookhead', emoji: '👁️' },
        { key: 'rastrero', emoji: '👣' },
        { key: 'phenomen', emoji: '🌀' },
        { key: 'replica', emoji: '🗣️' }
    ]

    const techAreas = [
        { key: 'ai', icon: '🤖' },
        { key: 'world', icon: '🗺️' },
        { key: 'gameplay', icon: '⚡' },
        { key: 'ui', icon: '🖥️' }
    ]

    return (
        <section className="py-12 max-w-5xl mx-auto px-4">
            {/* Cabecera */}
            <div className="mb-12">
                <a href="/proyectos" className="text-zinc-500 hover:text-purple-400 text-sm flex items-center gap-2 mb-4 transition">
                    {t('projects.back_to_projects')}
                </a>
                <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block mb-2">
                    {t('projects.items.silent_decay.title')}
                </h1>
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
                    {t('projects.items.silent_decay.subtitle')}
                </p>
                <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
                    {t('projects.items.silent_decay.about_desc')}
                </p>
            </div>

            {/* Video Player Section */}
            <div className="mb-12">
                <div id="preview" className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 aspect-video relative group">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        poster="/gamePreview/thumbnail.jpg"
                    >
                        <source src="/gamePreview/GamePreview.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>

                    <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-purple-300 border border-purple-500/20 font-semibold">
                            {t('projects.items.silent_decay.wip')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Barra de progreso de Desarrollo Avanzado (80%) */}
            <div className="mb-16 bg-zinc-950 border border-zinc-850 p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] -mr-20 -mt-20 rounded-full" />
                <div className="relative z-10 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                            <h3 className="font-bold text-white text-lg">Development Progress</h3>
                            <p className="text-xs text-zinc-500">Advanced stage of production, refining core features</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-extrabold text-purple-400">80%</span>
                        </div>
                    </div>
                    <div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 p-0.5">
                        <div 
                            className="h-full bg-linear-to-r from-purple-600 to-indigo-500 rounded-full relative" 
                            style={{ width: '80%' }}
                        >
                            <div className="absolute inset-0 bg-white/10 animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Design (Enemigos) */}
            <div className="mb-16">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-2xl font-bold text-white mb-3">
                        {t('projects.items.silent_decay.core_design_title')}
                    </h2>
                    <p className="text-sm text-purple-400 italic">
                        {t('projects.items.silent_decay.core_design_desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enemies.map(enemy => (
                        <div key={enemy.key} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-purple-500/20 transition duration-300">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{enemy.emoji}</span>
                                <h3 className="font-bold text-white text-lg">
                                    {t(`projects.items.silent_decay.enemies.${enemy.key}.name`)}
                                </h3>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {t(`projects.items.silent_decay.enemies.${enemy.key}.desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desarrollo Técnico */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                    {t('projects.items.silent_decay.technical_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techAreas.map(area => (
                        <div key={area.key} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 flex gap-4">
                            <div className="text-2xl p-3 bg-zinc-900 border border-zinc-800 rounded-xl h-fit">
                                {area.icon}
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-white text-base">
                                    {t(`projects.items.silent_decay.technical_areas.${area.key}.title`)}
                                </h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {t(`projects.items.silent_decay.technical_areas.${area.key}.desc`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ficha técnica y Habilidades */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-t border-zinc-900 pt-12">
                <div className="col-span-2">
                    <h2 className="text-xl font-bold mb-4 text-white">{t('projects.items.silent_decay.about_title')}</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        Silent Decay ha sido concebido desde sus bases como un entorno de desarrollo para probar e implementar arquitecturas escalables en Unity 6 y C#. No es solo un juego de terror, sino un laboratorio de desarrollo de sistemas interactivos.
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        El proyecto se enfoca en resolver desafíos de jugabilidad, estabilidad del código en sistemas procedurales complejos, modularidad de interfaces dinámicas y optimización de agentes con inteligencia artificial.
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                            {t('projects.items.silent_decay.technologies')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Unity 6', 'C#', 'NavMesh', 'FSM AI', 'Urp Shader'].map(tech => (
                                <span key={tech} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                            {t('projects.items.silent_decay.skills')}
                        </h3>
                        <ul className="text-xs text-zinc-400 space-y-2">
                            {t('projects.items.silent_decay.skills_items', { returnObjects: true }).map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="bg-linear-to-r from-zinc-950 to-zinc-900 rounded-3xl p-8 text-center border border-zinc-850">
                <h3 className="text-lg font-semibold mb-2">{t('projects.items.silent_decay.cta_title')}</h3>
                <p className="text-sm text-zinc-400 mb-6">{t('projects.items.silent_decay.cta_desc')}</p>
                <a
                    href="/contacto"
                    className="inline-block px-6 py-2.5 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-200 transition text-xs"
                >
                    {t('projects.items.silent_decay.cta_button')}
                </a>
            </div>
        </section>
    )
}
