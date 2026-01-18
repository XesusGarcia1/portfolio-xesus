import { useState, useEffect } from 'react'

export default function Music() {
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
        <section className="py-20 max-w-5xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Música</h1>

            {/* Perfil artístico */}
            <p className="text-zinc-400 mb-8">
                Bajo el nombre artístico <strong>Xesus Garcia</strong>, desarrollo y produzco
                música electrónica con un enfoque energético, oscuro y moderno. Mi trabajo
                combina ritmo, potencia y atmósferas intensas, orientadas tanto a la escucha
                activa como a contenido audiovisual.
            </p>


            {/* Estilos / Géneros */}
            <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Estilos y géneros</h2>
                <ul className="flex flex-wrap gap-3">
                    {[
                        'Brazilian Phonk',
                        'Drift Phonk',
                        'EDM',
                        'Big Room',
                        'Progressive House',
                        'Techno',
                        'Gym / Hard Energy',
                    ].map(style => (
                        <li
                            key={style}
                            className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm"
                        >
                            {style}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Qué hago */}
            <div className="mb-14">
                <h2 className="text-xl font-semibold mb-4">Qué hago</h2>
                <p className="text-zinc-400 mb-4">
                    Me especializo en la creación de <strong>tracks originales, remixes y
                        producciones instrumentales</strong>, con énfasis en bajos contundentes,
                    cowbells, drops agresivos y estructuras pensadas para:
                </p>

                <ul className="list-disc list-inside text-zinc-400 space-y-1">
                    <li>Edits de drift y automovilismo</li>
                    <li>Contenido para gimnasio y entrenamiento</li>
                    <li>Videos cortos (TikTok, Reels, Shorts)</li>
                    <li>Presentaciones y sets energéticos</li>
                </ul>
            </div>

            {/* Selección de Tracks Destacados (Los que SÍ funcionan bien) */}
            <div className="mb-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h2 className="text-xl font-semibold">Tracks Destacados</h2>
                    <p className="text-xs text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700">
                        Reproducción directa disponible
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Track 1 */}
                    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                        <iframe
                            src="https://open.spotify.com/embed/track/1bqc20g8OuBlTtY3QpdePH?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Track 2 */}
                    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                        <iframe
                            src="https://open.spotify.com/embed/track/1EYTMIuFAWwJyQ9teOsvsN?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Track 3 */}
                    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                        <iframe
                            src="https://open.spotify.com/embed/track/0kvupW5kfmsyPyFYOoDxzL?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Track 4 */}
                    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                        <iframe
                            src="https://open.spotify.com/embed/track/0CEYjjHQU5HCws2h3osZgy?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Track 5 */}
                    <div className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl hover:border-indigo-500/50 transition-colors">
                        <iframe
                            src="https://open.spotify.com/embed/track/1lj0v7wPTplpImIWXrzvZ9?utm_source=generator&theme=0"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>



            {/* Spotify Embed (PERFIL - Informativo) */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold mb-6">Explora mi Discografía</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
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
                            El widget de perfil de Spotify es ideal para seguirme y ver mis nuevos lanzamientos, pero para escuchar música directamente te recomiendo usar los reproductores de arriba.
                        </p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                        <h3 className="font-semibold mb-2">Mi perfil completo</h3>
                        <p className="text-sm text-zinc-400 mb-4">
                            Sigue mi perfil para estar al tanto de todos mis lanzamientos.
                        </p>
                        <a
                            href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center py-3 bg-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
                        >
                            Ver Perfil Spotify
                        </a>
                    </div>
                </div>
            </div>


            {/* Videos & TikTok */}
            <div className="mb-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-xl font-semibold">Videos & Sets</h2>
                    <a
                        href="https://www.tiktok.com/@lxesusgarcial?lang=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-400 hover:text-white transition flex items-center gap-2"
                    >
                        <span>Ver más en TikTok</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.32-2.34-.14-3.31.52-.89.62-1.48 1.66-1.57 2.74-.11 1.02.26 2.05.94 2.8.72.82 1.77 1.3 2.85 1.31.85.03 1.7-.27 2.37-.8.74-.61 1.19-1.5 1.25-2.45.03-2.95-.03-5.91-.02-8.87.01-4.07.01-8.15.01-12.23z" /></svg>
                    </a>
                </div>

                {/* TikTok Feed */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                                    {/* Thumbnail with Fallback */}
                                    {thumbnails[videoId] ? (
                                        <img
                                            src={thumbnails[videoId]}
                                            alt="TikTok Preview"
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                            <span className="text-zinc-500 text-xs animate-pulse">Cargando preview...</span>
                                        </div>
                                    )}

                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-2xl">
                                            <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Note */}
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="text-[10px] text-zinc-500 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Click para reproducir</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>



            {/* Galería visual */}
            <div className="mb-16">
                <h2 className="text-xl font-semibold mb-4">Estética & energía</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
                        'https://johanycarlos.home.blog/wp-content/uploads/2019/01/fotolia45452813subscriptionmonthlyl21700x467-1200x800.jpg?w=1024',
                        'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2',
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg bg-zinc-900"
                        >
                            <img
                                src={img}
                                alt="Electronic music visual"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Plataformas */}
            <div className="mb-14">
                <h2 className="text-xl font-semibold mb-4">Plataformas</h2>
                <p className="text-zinc-400 mb-4">
                    Mi música está disponible en las principales plataformas de streaming:
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
                    >
                        Spotify
                    </a>
                    <a
                        href="https://www.youtube.com/@Xesus_Garcia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://soundcloud.com/xesus-garcia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
                    >
                        SoundCloud
                    </a>
                </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
                <a
                    href="https://open.spotify.com/intl-es/artist/7s8730CcZiGoqCiyYkaH2Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white"
                >
                    Escuchar música
                </a>
            </div>
        </section >
    )
}
