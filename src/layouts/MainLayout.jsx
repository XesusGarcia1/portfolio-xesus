import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative overflow-hidden">
            {/* Fondo Base Fijo */}
            <div className="fixed inset-0 pointer-events-none -z-20 bg-zinc-950" />

            {/* Animación de Glows (Auras) suaves */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[140px]"
                />

                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, -40, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600 rounded-full blur-[140px]"
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
