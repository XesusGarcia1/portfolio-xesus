import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/desarrollo', label: 'Desarrollo' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/musica', label: 'Música' },
    { to: '/logros', label: 'Logros' },
    { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-100">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="font-bold text-lg tracking-wide">
                    Xesus<span className="text-indigo-500">.</span>
                </NavLink>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6">
                    {links.map(link => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `transition-colors ${isActive
                                        ? 'text-indigo-400'
                                        : 'text-zinc-300 hover:text-white'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-zinc-300 hover:text-white transition"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-zinc-800 overflow-hidden bg-zinc-950"
                    >
                        <ul className="flex flex-col py-4 px-4 gap-4">
                            {links.map(link => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block py-2 transition-colors ${isActive
                                                ? 'text-indigo-400'
                                                : 'text-zinc-300 hover:text-white'
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
