import { NavLink } from 'react-router-dom'

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/desarrollo', label: 'Desarrollo' },
    { to: '/proyectos', label: 'Proyectos' },
    { to: '/musica', label: 'Música' },
    { to: '/logros', label: 'Logros' },
    { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
    return (
        <header className="border-b border-zinc-800">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <span className="font-bold text-lg tracking-wide">
                    Xesus<span className="text-indigo-500">.</span>
                </span>

                {/* Links */}
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
            </nav>
        </header>
    )
}
