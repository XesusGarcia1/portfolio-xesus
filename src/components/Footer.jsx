import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
            {t('footer.rights', { year: new Date().getFullYear() })}
        </footer>
    )
}
