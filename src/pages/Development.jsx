import { useTranslation } from 'react-i18next'

export default function Development() {
    const { t } = useTranslation();

    return (
        <section className="py-20 max-w-5xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">{t('development.title')}</h1>

            {/* Resumen profesional */}
            <p className="text-zinc-400 mb-6">
                {t('development.summary_part1')}
            </p>

            <p className="text-zinc-400 mb-6">
                {t('development.summary_part2')}
            </p>

            <p className="text-zinc-400 mb-12">
                {t('development.summary_part3')}
            </p>

            {/* Stack tecnológico */}
            <div className="mb-14">
                <h2 className="text-xl font-semibold mb-4">{t('development.tech_stack_title')}</h2>

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
                <h2 className="text-xl font-semibold mb-6">{t('development.specialization_title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('development.areas.backend.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('development.areas.backend.desc')}
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('development.areas.frontend.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('development.areas.frontend.desc')}
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('development.areas.automation_ia.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('development.areas.automation_ia.desc')}
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('development.areas.best_practices.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('development.areas.best_practices.desc')}
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
                    📄 {t('development.download_cv')}
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
                    {t('development.view_projects')}
                </a>
            </div>
        </section>
    )
}
