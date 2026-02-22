import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="py-20 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">{t('contact.title')}</h1>

            <p className="text-zinc-400 mb-12 max-w-2xl">
                {t('contact.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {/* Email */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">{t('contact.email_title')}</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        {t('contact.email_desc')}
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
                    <h3 className="font-semibold mb-2">{t('contact.linkedin_title')}</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        {t('contact.linkedin_desc')}
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
                {/*  <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">{t('contact.github_title')}</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        {t('contact.github_desc')}
                    </p>
                    <a
                        href="https://github.com/XesusGarcia1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline text-sm"
                    >
                        github.com/XesusGarcia1
                    </a>
                </div> */}

                {/* Música */}
                <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                    <h3 className="font-semibold mb-2">{t('contact.music_title')}</h3>
                    <p className="text-zinc-400 text-sm mb-4">
                        {t('contact.music_desc')}
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
                    {t('contact.cta')}
                </a>
            </div>
        </section>
    )
}
