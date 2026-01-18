import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Development from '../pages/Development'
import Projects from '../pages/Projects'
import Music from '../pages/Music'
import Achievements from '../pages/Achievements'
import Contact from '../pages/Contact'
import ChatbotProject from '../pages/ChatbotProject'
import PortfolioProject from '../pages/PortfolioProject'
import UnityGameProject from '../pages/UnityGameProject'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'desarrollo', element: <Development /> },
            { path: 'proyectos', element: <Projects /> },
            { path: 'musica', element: <Music /> },
            { path: 'logros', element: <Achievements /> },
            { path: 'contacto', element: <Contact /> },
            { path: 'proyectos/chatbot', element: <ChatbotProject /> },
            { path: 'proyectos/portafolio', element: <PortfolioProject /> },
            { path: 'proyectos/unity-game', element: <UnityGameProject /> },
        ],
    },
])

export default router
