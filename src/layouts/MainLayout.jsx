import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative overflow-hidden">
            {/* Fondo Base Fijo */}
            <div className="fixed inset-0 pointer-events-none -z-20 bg-zinc-950" />

            {/* Animación de Glows (Auras) suaves optimizadas para GPU y WebKit iOS */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl transform-gpu"
                />

                <motion.div
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl transform-gpu"
                />
            </div>

            <Navbar />

            <main className="flex-1 container mx-auto px-4 relative z-10 pt-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
