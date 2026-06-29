import React, { useEffect, useState } from 'react'
import nightMode from '../../assets/night-mode.png'

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme
      ? savedTheme === 'dark'
      : systemPrefersDark

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  return (
    <div>
      <button onClick={toggleTheme} type="button" aria-label="Toggle dark mode">
        <img
          src={nightMode}
          alt="Night Mode"
          className="w-12 cursor-pointer drop-shadow-2xl transition-transform duration-300 hover:scale-110"
        />
      </button>
    </div>
  )
}

export default DarkMode;
