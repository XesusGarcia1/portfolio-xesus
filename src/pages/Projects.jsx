import { useTranslation } from 'react-i18next'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section className="py-20 max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">{t('projects.title')}</h1>

            <p className="text-zinc-400 mb-12">
                {t('projects.description')}
            </p>

            {/* Proyectos profesionales */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">
                    {t('projects.professional_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Proyecto 1 */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            {t('projects.items.cfe.title')}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            {t('projects.items.cfe.description')}
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
                            {t('projects.items.cfe.role')}
                        </p>

                        <div className="flex gap-3">
                            <span className="text-xs text-zinc-500 italic">
                                {t('projects.items.cfe.confidential')}
                            </span>
                        </div>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            {t('projects.items.erp.title')}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            {t('projects.items.erp.description')}
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
                            {t('projects.items.erp.role')}
                        </p>

                        <span className="text-xs text-zinc-500 italic">
                            {t('projects.items.erp.production_status')}
                        </span>
                    </div>
                </div>
            </div>

            {/* Proyectos personales */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">
                    {t('projects.personal_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Proyecto IA */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            {t('projects.items.chatbot.title')}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            {t('projects.items.chatbot.description')}
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
                                {t('projects.view_details')}
                            </a>
                        </div>
                    </div>

                    {/* Proyecto Portafolio */}
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            {t('projects.items.portfolio.title')}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            {t('projects.items.portfolio.description')}
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
                                {t('projects.view_details')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Dev & Experimentos */}
            <div className="mb-20">
                <h2 className="text-2xl font-semibold mb-6">
                    {t('projects.gamedev_title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-lg font-semibold mb-2">
                            {t('projects.items.unity.title')}
                        </h3>

                        <p className="text-zinc-400 text-sm mb-4">
                            {t('projects.items.unity.description')}
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
                            {t('projects.items.unity.status')}
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="/proyectos/unity-game"
                                className="text-sm text-indigo-400 hover:underline"
                            >
                                {t('projects.view_evidence')}
                            </a>
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
                    {t('projects.mind_project')}
                </a>
            </div>
        </section>
    )
}
