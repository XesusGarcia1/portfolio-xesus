import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Music() {
    const { t } = useTranslation()
    const [activeVideo, setActiveVideo] = useState(null);
    const [thumbnails, setThumbnails] = useState({});

    const tiktokVideos = [
        '7555381387247766805',
        '7526425034999614727',
        '7564655070197959956'
    ];

    useEffect(() => {
        tiktokVideos.forEach(id => {
            fetch(`https://www.tiktok.com/oembed?url=https://www.tiktok.com/video/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.thumbnail_url) {
                        setThumbnails(prev => ({ ...prev, [id]: data.thumbnail_url }));
                    }
                })
                .catch(err => console.error("Error loading TikTok thumb:", err));
        });
    }, []);

    return (
        <section className="py-20 max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">{t('music.title')}</h1>

            <p className="text-zinc-400 mb-8">
                {t('music.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-xl font-semibold mb-4">{t('music.styles_title')}</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Brazilian Phonk',
                            'Drift Phonk',
                            'EDM',
                            'Big Room',
                            'Progressive House',
                            'Techno',
                            'Gym / Hard Energy',
                        ].map(genre => (
                            <span key={genre} className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs">
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">{t('music.what_i_do_title')}</h2>
                    <p className="text-zinc-400 text-sm mb-4">
                        {t('music.what_i_do_desc')}
                    </p>
                    <ul className="text-zinc-400 text-sm space-y-2">
                        {t('music.what_i_do_items', { returnObjects: true }).map((item, idx) => (
                            <li key={idx}>• {item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Reproductores destacados */}
            <div className="mb-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-2xl font-semibold">{t('music.featured_tracks')}</h2>
                    <p className="text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700">
                        {t('music.featured_tracks_direct')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        '1bqc20g8OuBlTtY3QpdePH',
                        '1EYTMIuFAWwJyQ9teOsvsN',
                        '0kvupW5kfmsyPyFYOoDxzL',
                        '0CEYjjHQU5HCws2h3osZgy',
                        '1lj0v7wPTplpImIWXrzvZ9'
                    ].map((trackId, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                            <iframe
                                src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>

            {/* Perfil de Spotify y Discografía */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">{t('music.explore_discography')}</h2>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/artist/7s8730CcZiGoqCiyYkaH2Z?utm_source=generator&theme=0"
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                    <p className="mt-4 text-sm text-zinc-400">
                        {t('music.discography_desc')}
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center">
                        <h3 className="font-semibold mb-2">{t('music.full_profile_title')}</h3>
                        <p className="text-zinc-400 text-xs mb-6">
                            {t('music.full_profile_desc')}
                        </p>
                        <a
                            href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors text-sm"
                        >
                            {t('music.view_spotify_profile')}
                        </a>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                        <h3 className="font-semibold mb-4">{t('music.videos_sets_title')}</h3>
                        <div className="space-y-3">
                            <a
                                href="https://www.tiktok.com/@lxesusgarcial?lang=es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition group"
                            >
                                <span className="text-sm">TikTok</span>
                                <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition">
                                    {t('music.view_more_tiktok')} →
                                </span>
                            </a>
                            <a
                                href="https://www.youtube.com/@XesusGarcia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
                            >
                                <span className="text-sm">YouTube</span>
                                <span className="text-xs text-zinc-500">{t('music.click_to_play')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* TikTok Feed Restored */}
            <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tiktokVideos.map((videoId) => (
                        <div key={videoId} className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl aspect-9/16 relative group">
                            {activeVideo === videoId ? (
                                <iframe
                                    src={`https://www.tiktok.com/embed/v2/${videoId}`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            ) : (
                                <div
                                    className="w-full h-full cursor-pointer relative"
                                    onClick={() => setActiveVideo(videoId)}
                                >
                                    {thumbnails[videoId] ? (
                                        <img
                                            src={thumbnails[videoId]}
                                            alt="TikTok Preview"
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                            <span className="text-zinc-500 text-xs animate-pulse">{t('music.loading_preview')}</span>
                                        </div>
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-2xl">
                                            <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="text-[10px] text-zinc-500 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">{t('music.click_to_play')}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Estética Section */}
            <div className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group mb-16">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -mr-32 -mt-32"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('music.aesthetics_energy')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        {[
                            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
                            'https://johanycarlos.home.blog/wp-content/uploads/2019/01/fotolia45452813subscriptionmonthlyl21700x467-1200x800.jpg?w=1024',
                            'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2',
                        ].map((img, index) => (
                            <div key={index} className="overflow-hidden rounded-lg bg-zinc-900">
                                <img src={img} alt="Visual" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Plataformas Restored */}
            <div className="mb-16">
                <h3 className="text-xl font-semibold mb-4">{t('music.platforms_title')}</h3>
                <p className="text-zinc-400 mb-6">{t('music.platforms_desc')}</p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-zinc-300 font-medium"
                    >
                        Spotify
                    </a>
                    <a
                        href="https://www.youtube.com/@XesusGarcia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-zinc-300 font-medium"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://soundcloud.com/xesus-garcia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition text-zinc-300 font-medium"
                    >
                        SoundCloud
                    </a>
                </div>
            </div>

            <div className="text-center">
                <a
                    href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                    target="_blank"
                    className="inline-block px-10 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:scale-105 transition shadow-lg shadow-indigo-600/20"
                >
                    {t('music.listen_music')}
                </a>
            </div>
        </section>
    )
}
