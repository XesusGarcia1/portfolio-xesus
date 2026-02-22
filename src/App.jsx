import { RouterProvider } from 'react-router-dom'
import router from './router'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <LanguageSwitcher />
    </>
  )
}

export default App
