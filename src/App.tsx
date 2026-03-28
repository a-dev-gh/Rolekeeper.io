import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useTheme } from './hooks/useTheme'
import { ThemeContext } from './context/ThemeContext'
import { router } from './routes'

export default function App() {
  const { theme, setTheme } = useTheme()

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Suspense fallback={
          <div className="placeholder-page">
            <div className="nav-mark" style={{ width: 40, height: 40 }} />
          </div>
        }>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeContext.Provider>
    </HelmetProvider>
  )
}
