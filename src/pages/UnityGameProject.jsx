import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ReCAPTCHA from 'react-google-recaptcha'

// URLs configurables de Google Drive para la Demo (Links reales colocados por el usuario)
const DRIVE_PC_URL = 'https://drive.google.com/file/d/19WlnnZFLA1vmeIMiCmwGTIc6IvYnE2_b/view?usp=sharing'
const DRIVE_ANDROID_URL = 'https://drive.google.com/file/d/1BgjWAG7jVIw9YXitIvLGonsfBayIAn82/view?usp=sharing'

// Clave pública oficial de Google reCAPTCHA v2 (Casilla de v2) para Silent Decay Demo
const RECAPTCHA_SITE_KEY = '6LdkGqQtAAAAAOY1MBkQJrQvO8xUGxWhXJhMRxTD'

// URL de la Base de Datos en tiempo real de Firebase de Google del usuario
const FIREBASE_DB_URL = 'https://silent-decay-default-rtdb.firebaseio.com/downloads.json'

export default function UnityGameProject() {
    const { t } = useTranslation()
    const [selectedMap, setSelectedMap] = useState('Hospital')
    const [selectedImage, setSelectedImage] = useState(null)

    // Estados para el Modal Google reCAPTCHA y Contador de Descargas
    const [downloadModalOpen, setDownloadModalOpen] = useState(false)
    const [downloadPlatform, setDownloadPlatform] = useState(null) // 'pc' | 'android'
    const [recaptchaToken, setRecaptchaToken] = useState(null)
    const [captchaError, setCaptchaError] = useState(false)
    const [downloadCounts, setDownloadCounts] = useState({ pc: 17, android: 12 })

    // Cargar y sincronizar el contador de descargas global en tiempo real desde Firebase
    useEffect(() => {
        fetch(FIREBASE_DB_URL)
            .then(res => res.json())
            .then(data => {
                if (data && typeof data.pc === 'number' && typeof data.android === 'number') {
                    setDownloadCounts({ pc: data.pc, android: data.android })
                }
            })
            .catch(() => { })
    }, [])

    const handleOpenDownload = (platform) => {
        setDownloadPlatform(platform)
        setRecaptchaToken(null)
        setCaptchaError(false)
        setDownloadModalOpen(true)
    }

    const handleConfirmDownload = (e) => {
        e.preventDefault()
        if (!recaptchaToken) {
            setCaptchaError(true)
            return
        }

        const isPc = downloadPlatform === 'pc'

        // Incrementar y sincronizar instantáneamente en la base de datos en la nube (Firebase)
        setDownloadCounts(prev => {
            const newPc = isPc ? prev.pc + 1 : prev.pc
            const newAndroid = !isPc ? prev.android + 1 : prev.android
            const updated = { pc: newPc, android: newAndroid }

            fetch(FIREBASE_DB_URL, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated)
            }).catch(() => { })

            return updated
        })

        // Iniciar descarga / abrir Google Drive con el enlace real del usuario
        const targetUrl = isPc ? DRIVE_PC_URL : DRIVE_ANDROID_URL
        window.open(targetUrl, '_blank')

        // Cerrar modal
        setDownloadModalOpen(false)
    }

    const enemies = [
        { key: 'amalgam', emoji: '👹' },
        { key: 'phenomen', emoji: '🌀' },
        { key: 'replica', emoji: '🗣️' }
    ]

    const techAreas = [
        { key: 'ai', icon: '🤖' },
        { key: 'world', icon: '🗺️' },
        { key: 'gameplay', icon: '⚡' },
        { key: 'ui', icon: '🖥️' }
    ]

    // Configuración de la multimedia por mapa
    const mapsData = {
        'Hospital': {
            video: '/image/silent-decay/Hospital/Hosp-v.mp4',
            images: [
                '/image/silent-decay/Hospital/Hosp1.png',
                '/image/silent-decay/Hospital/Hosp2.png'
            ],
            desc: t('projects.items.silent_decay.maps.hospital.desc')
        },
        'Industrial Depot': {
            video: '/image/silent-decay/Industrial Depot/DepIndustrial-v.mp4',
            images: [
                '/image/silent-decay/Industrial Depot/DepIndustrial1.png',
                '/image/silent-decay/Industrial Depot/DepIndustrial2.png',
                '/image/silent-decay/Industrial Depot/DepIndustrial3.png',
                '/image/silent-decay/Industrial Depot/DepIndustrial4.png'
            ],
            desc: t('projects.items.silent_decay.maps.industrial.desc')
        },
        'Tunnels': {
            video: '/image/silent-decay/Tunnels/Tunn-v.mp4',
            images: [
                '/image/silent-decay/Tunnels/Tunn1.png',
                '/image/silent-decay/Tunnels/Tunn2.png'
            ],
            desc: t('projects.items.silent_decay.maps.tunnels.desc')
        }
    }

    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* 1. HERO BANNER INMERSIVO (Video de Fondo) */}
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-end">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                >
                    <source src="/image/silent-decay/Menu/Silent Decay Loop.mp4" type="video/mp4" />
                </video>
                {/* Degradados oscuros de superposición */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/70 to-zinc-950" />
                <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-transparent to-zinc-950/20" />

                <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-10">
                    <a href="/proyectos" className="text-zinc-500 hover:text-purple-400 text-sm flex items-center gap-2 mb-4 transition w-fit">
                        {t('projects.back_to_projects')}
                    </a>
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent inline-block mb-2">
                        {t('projects.items.silent_decay.title')}
                    </h1>
                    <p className="text-purple-400 text-xs md:text-sm font-semibold uppercase tracking-widest">
                        {t('projects.items.silent_decay.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">

                {/* 2. REPRODUCTOR DE MENÚ PRINCIPAL (Con sonido) */}
                <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
                        {t('projects.items.silent_decay.menu_audio_title')}
                    </h2>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                        {t('projects.items.silent_decay.menu_audio_desc')}
                    </p>
                    <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 aspect-video relative group">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster="/gamePreview/thumbnail.jpg"
                        >
                            <source src="/image/silent-decay/Menu/Silent Decay-Menu.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-purple-300 border border-purple-500/20 font-semibold">
                                {t('projects.items.silent_decay.wip')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3. BARRA DE PROGRESO DE DESARROLLO */}
                <div className="bg-zinc-950 border border-zinc-850 p-6 md:p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] -mr-20 -mt-20 rounded-full" />
                    <div className="relative z-10 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <div>
                                <h3 className="font-bold text-white text-lg">
                                    {t('projects.items.silent_decay.progress_title')}
                                </h3>
                                <p className="text-xs text-zinc-500">
                                    {t('projects.items.silent_decay.progress_subtitle')}
                                </p>
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

                {/* 4. SECCIÓN DEMO JUGABLE / EARLY ACCESS (PC y Android + Captcha + Contador) */}
                <div className="bg-linear-to-b from-zinc-950 via-purple-950/10 to-zinc-950 border border-purple-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-800/80 pb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                                    Early Access Demo
                                </span>
                            </div>
                            <h2 className="text-2xl font-extrabold text-white">{t('projects.items.silent_decay.demo.title')}</h2>
                            <p className="text-zinc-400 text-xs md:text-sm">{t('projects.items.silent_decay.demo.subtitle')}</p>
                        </div>

                        {/* Contador Global de Descargas */}
                        <div className="flex items-center gap-3 bg-zinc-900/90 border border-zinc-800 px-4 py-2.5 rounded-2xl w-fit">
                            <span className="text-2xl">📥</span>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                                    {t('projects.items.silent_decay.demo.total_downloads')}
                                </p>
                                <p className="text-lg font-black text-purple-400 leading-none">
                                    {downloadCounts.pc + downloadCounts.android} <span className="text-xs font-normal text-zinc-400">{t('projects.items.silent_decay.demo.downloads_unit')}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjetas de Descarga (PC / Android) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Windows PC */}
                        <div className="bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 transition duration-300 rounded-2xl p-6 flex flex-col justify-between space-y-4 group">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl">💻</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">.RAR | PC</span>
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                                    {t('projects.items.silent_decay.demo.pc_title')}
                                </h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {t('projects.items.silent_decay.demo.pc_desc')}
                                </p>
                            </div>

                            <div className="pt-2 flex items-center justify-between border-t border-zinc-850">
                                <span className="text-xs text-zinc-500 font-mono">
                                    {downloadCounts.pc} {t('projects.items.silent_decay.demo.downloads_unit')}
                                </span>
                                <button
                                    onClick={() => handleOpenDownload('pc')}
                                    className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-lg shadow-purple-600/20 cursor-pointer"
                                >
                                    <span>{t('projects.items.silent_decay.demo.download_btn')}</span>
                                    <span>➔</span>
                                </button>
                            </div>
                        </div>

                        {/* Android APK */}
                        <div className="bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 transition duration-300 rounded-2xl p-6 flex flex-col justify-between space-y-4 group">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl">🤖</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">.APK | Android</span>
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                                    {t('projects.items.silent_decay.demo.android_title')}
                                </h3>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {t('projects.items.silent_decay.demo.android_desc')}
                                </p>
                            </div>

                            <div className="pt-2 flex items-center justify-between border-t border-zinc-850">
                                <span className="text-xs text-zinc-500 font-mono">
                                    {downloadCounts.android} {t('projects.items.silent_decay.demo.downloads_unit')}
                                </span>
                                <button
                                    onClick={() => handleOpenDownload('android')}
                                    className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-lg shadow-purple-600/20 cursor-pointer"
                                >
                                    <span>{t('projects.items.silent_decay.demo.download_btn')}</span>
                                    <span>➔</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. EXPLORADOR INTERACTIVO DE MAPAS (Hospital, Industrial, Tunnels) */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">
                        {t('projects.items.silent_decay.maps_title')}
                    </h2>

                    {/* Botones selectores de mapas */}
                    <div className="flex border-b border-zinc-800 gap-4 mb-8">
                        {Object.keys(mapsData).map(mapName => (
                            <button
                                key={mapName}
                                onClick={() => setSelectedMap(mapName)}
                                className={`pb-3 text-sm font-semibold transition-all duration-300 border-b-2 px-1 ${selectedMap === mapName
                                    ? 'border-purple-500 text-purple-400'
                                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                                    }`}
                            >
                                {mapName}
                            </button>
                        ))}
                    </div>

                    {/* Contenido del mapa seleccionado */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Video del mapa */}
                        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-900 aspect-video relative">
                            <video
                                key={selectedMap} // Fuerza la recarga al cambiar de mapa
                                className="w-full h-full object-cover"
                                controls
                                loop
                                muted
                                autoPlay
                                playsInline
                            >
                                <source src={mapsData[selectedMap].video} type="video/mp4" />
                            </video>
                        </div>

                        {/* Descripción e imágenes */}
                        <div className="lg:col-span-5 space-y-4">
                            <h3 className="text-lg font-bold text-white">{selectedMap}</h3>
                            <p className="text-zinc-400 text-xs leading-relaxed">
                                {mapsData[selectedMap].desc}
                            </p>

                            <div>
                                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                                    {t('projects.items.silent_decay.screenshots_title')}
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {mapsData[selectedMap].images.map((img, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className="aspect-video rounded-lg overflow-hidden border border-zinc-850 bg-zinc-900 cursor-pointer group"
                                        >
                                            <img
                                                src={img}
                                                alt={`${selectedMap} Screenshot ${index + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. CORE DESIGN (Enemigos) */}
                <div>
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
                                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                                    {t(`projects.items.silent_decay.enemies.${enemy.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. DESARROLLO TÉCNICO */}
                <div>
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
                                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                                        {t(`projects.items.silent_decay.technical_areas.${area.key}.desc`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. FICHA TÉCNICA Y HABILIDADES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-12">
                    <div className="col-span-2">
                        <h2 className="text-xl font-bold mb-4 text-white">
                            {t('projects.items.silent_decay.about_title')}
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            {t('projects.items.silent_decay.about_p1')}
                        </p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {t('projects.items.silent_decay.about_p2')}
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

                {/* 9. CTA FINAL */}
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
            </div>

            {/* MODAL GOOGLE reCAPTCHA OFICIAL (Servido directamente por los servidores de Google) */}
            <AnimatePresence>
                {downloadModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl space-y-6"
                        >
                            <button
                                onClick={() => setDownloadModalOpen(false)}
                                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition text-lg cursor-pointer"
                            >
                                ✕
                            </button>

                            <div className="space-y-2 text-center md:text-left">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <span className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-lg">🛡️</span>
                                    <h3 className="font-bold text-white text-lg">{t('projects.items.silent_decay.demo.captcha_modal_title')}</h3>
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    {t('projects.items.silent_decay.demo.captcha_instructions')}
                                </p>
                            </div>

                            {/* COMPONENTE OFICIAL DE GOOGLE reCAPTCHA (Carga directa desde Google API) */}
                            <div className="space-y-4 flex flex-col items-center">
                                <div className="bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800 shadow-inner flex justify-center w-full overflow-hidden">
                                    <ReCAPTCHA
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        theme="dark"
                                        onChange={(token) => {
                                            setRecaptchaToken(token)
                                            setCaptchaError(false)
                                        }}
                                        onExpired={() => setRecaptchaToken(null)}
                                    />
                                </div>

                                {captchaError && (
                                    <p className="text-red-400 text-xs font-semibold text-center">
                                        {t('projects.items.silent_decay.demo.captcha_error')}
                                    </p>
                                )}

                                <button
                                    type="button"
                                    onClick={handleConfirmDownload}
                                    disabled={!recaptchaToken}
                                    className={`w-full py-3 text-white font-bold text-sm rounded-xl transition shadow-lg ${recaptchaToken
                                        ? 'bg-purple-600 hover:bg-purple-500 shadow-purple-600/30 cursor-pointer'
                                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-60'
                                        }`}
                                >
                                    {t('projects.items.silent_decay.demo.captcha_verify_btn')}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MODAL DE IMÁGENES A PANTALLA COMPLETA */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={selectedImage}
                            alt="Screenshot Fullscreen"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-zinc-800"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
