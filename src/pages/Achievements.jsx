import { useTranslation } from 'react-i18next'

export default function Achievements() {
    const { t } = useTranslation()

    return (
        <section className="py-20 max-w-5xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">{t('achievements.title')}</h1>

            <p className="text-zinc-400 mb-12 max-w-3xl">
                {t('achievements.description')}
            </p>

            {/* Logros profesionales */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">{t('achievements.professional_title')}</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.erp.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.erp.desc')}
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.solutions.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.solutions.desc')}
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.ia.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.ia.desc')}
                        </p>
                    </li>
                </ul>
            </div>

            {/* Logros creativos */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">{t('achievements.creative_title')}</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.original_music.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.original_music.desc')}
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.artistic_identity.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.artistic_identity.desc')}
                        </p>
                    </li>
                </ul>
            </div>

            {/* Logros personales */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">{t('achievements.personal_title')}</h2>

                <ul className="space-y-6">
                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.personal_projects.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.personal_projects.desc')}
                        </p>
                    </li>

                    <li className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-2">{t('achievements.items.modern_tech.title')}</h3>
                        <p className="text-zinc-400 text-sm">
                            {t('achievements.items.modern_tech.desc')}
                        </p>
                    </li>
                </ul>
            </div>

            {/* Cierre */}
            <div className="text-center">
                <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
                    {t('achievements.closing')}
                </p>
            </div>
        </section>
    )
}
