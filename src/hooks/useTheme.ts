import { useState, useEffect, useCallback } from 'react'
import type { Theme } from '../types'

const STORAGE_KEY = 'rk_t'

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark' || saved === 'arcade') return saved
  } catch {}
  return 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    try { localStorage.setItem(STORAGE_KEY, newTheme) } catch {}
  }, [])

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Spawn particles for arcade theme
  useEffect(() => {
    if (theme !== 'arcade') return

    const container = document.querySelector('.particles')
    if (!container) return

    const colors = ['#00f5ff', '#ff2d78', '#c555ff', '#ffe600', '#00ffb3']
    const particles: HTMLDivElement[] = []

    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 3 + 1
      p.style.width = `${size}px`
      p.style.height = `${size}px`
      p.style.left = `${Math.random() * 100}%`
      p.style.background = colors[Math.floor(Math.random() * colors.length)]
      p.style.setProperty('--dx', `${(Math.random() - 0.5) * 100}px`)
      p.style.animationDuration = `${Math.random() * 8 + 6}s`
      p.style.animationDelay = `${Math.random() * 10}s`
      container.appendChild(p)
      particles.push(p)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [theme])

  return { theme, setTheme }
}
