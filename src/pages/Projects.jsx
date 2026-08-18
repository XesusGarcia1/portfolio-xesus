import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section className="py-20 max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">{t('projects.title')}</h1>

            <p className="text-zinc-400 mb-12">
                {t('projects.description')}
            </p>

            {/* 1. PROYECTO DESTACADO (FEATURED) */}
            <div className="mb-20">
                <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span>
                    ⭐ {t('projects.featured_title')}
                </h2>

                <div className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-8 md:p-10 group transition-all duration-300 hover:border-purple-500/30">
                    {/* Efecto Glow de fondo */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 blur-[100px] -mr-32 -mt-32 rounded-full -z-10 group-hover:bg-purple-600/10 transition-colors" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                        {/* Video / Preview */}
                        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video relative">
                            <video
                                id="preview"
                                className="w-full h-full object-cover"
                                loop
                                muted
                                autoPlay
                                playsInline
                            >
                                <source src="/gamePreview/GamePreview.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute top-4 right-4">
                                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-purple-300 font-semibold border border-purple-500/20">
                                    {t('projects.items.silent_decay.wip')}
                                </span>
                            </div>
                        </div>

                        {/* Contenido descriptivo */}
                        <div className="lg:col-span-3 space-y-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                                    {t('projects.items.silent_decay.title')}
                                </h3>
                                <p className="text-xs text-purple-400 uppercase tracking-wider mt-1">
                                    {t('projects.items.silent_decay.subtitle')}
                                </p>
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {t('projects.items.silent_decay.description')}
                            </p>

                            {/* Stack del juego */}
                            <div className="flex flex-wrap gap-2">
                                {['Unity 6', 'C#', 'Game AI', 'FSM', 'NavMesh', 'Input System'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Barra de Progreso Elegante */}
                            <div className="pt-2 max-w-md">
                                <div className="flex justify-between text-[11px] text-zinc-500 mb-1.5">
                                    <span>{t('projects.items.silent_decay.status')}</span>
                                    <span className="font-bold text-purple-400">80%</span>
                                </div>
                                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                                    <div 
                                        className="h-full bg-linear-to-r from-purple-500 via-purple-600 to-indigo-500 rounded-full relative" 
                                        style={{ width: '80%' }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Acciones */}
                            <div className="flex flex-wrap gap-3 pt-3">
                                <a
                                    href="/proyectos/silent-decay"
                                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition duration-300"
                                >
                                    🎮 {t('projects.view_development_details')}
                                </a>
                                <a
                                    href="/proyectos/silent-decay#preview"
                                    className="px-5 py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-900 text-zinc-300 text-xs transition duration-300"
                                >
                                    📺 {t('projects.view_evidence')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PROYECTOS PROFESIONALES */}
            <div className="mb-20">
                <h2 className="text-xl font-semibold mb-6 border-b border-zinc-800/50 pb-2 text-zinc-300">
                    💼 {t('projects.professional_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CFE */}
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {t('projects.items.cfe.title')}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                {t('projects.items.cfe.description')}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Vue.js', 'CodeIgniter', 'MySQL', 'SMTP API'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-900 font-mono">
                                <span className="text-[11px] text-zinc-500">
                                    {t('projects.items.cfe.role')}
                                </span>
                                <span className="text-[11px] text-zinc-600 italic">
                                    {t('projects.items.cfe.confidential')}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ERP Mueblería */}
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {t('projects.items.erp.title')}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                {t('projects.items.erp.description')}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['PHP', 'CodeIgniter', 'Vue.js', 'PostgreSQL', 'Git'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-900 font-mono">
                                <span className="text-[11px] text-zinc-500">
                                    {t('projects.items.erp.role')}
                                </span>
                                <span className="text-[11px] text-indigo-400 font-semibold">
                                    {t('projects.items.erp.production_status')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. PROYECTOS PERSONALES */}
            <div className="mb-20">
                <h2 className="text-xl font-semibold mb-6 border-b border-zinc-800/50 pb-2 text-zinc-300">
                    🛠️ {t('projects.personal_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Chatbot IA */}
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {t('projects.items.chatbot.title')}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                {t('projects.items.chatbot.description')}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['React', 'Tailwind CSS', 'Framer Motion', 'AI API'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 border-t border-zinc-900 pt-3">
                                <a
                                    href="/proyectos/chatbot"
                                    className="text-xs text-indigo-400 hover:underline"
                                >
                                    {t('projects.view_details')} →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Portafolio */}
                    <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition duration-300 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-white">
                                {t('projects.items.portfolio.title')}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                {t('projects.items.portfolio.description')}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 border-t border-zinc-900 pt-3">
                                <a
                                    href="/proyectos/portafolio"
                                    className="text-xs text-indigo-400 hover:underline"
                                >
                                    {t('projects.view_details')} →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-2 text-white">{t('projects.mind_project')}</h3>
                <a
                    href="/contacto"
                    className="inline-block mt-4 px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium text-sm"
                >
                    ✉️ {t('contact.cta')}
                </a>
            </div>
        </section>
    )
}
