import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useSound } from "@/hooks/use-sound"
import { click8bitSound } from "@/lib/click-8bit"

type ThemeMode = "light" | "dark"

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark"
  }

  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") { 
    return stored
  }

  return "dark"
}

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(mode)
  document.documentElement.setAttribute("data-theme", mode)
  document.documentElement.style.colorScheme = mode
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("dark")
  const [play] = useSound(click8bitSound)

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  function toggleMode() {
    play()
    const nextMode: ThemeMode = mode === "light" ? "dark" : "light"

    const updateTheme = () => {
      setMode(nextMode)
      applyThemeMode(nextMode)
      window.localStorage.setItem("theme", nextMode)
    }

    if (!document.startViewTransition) {
      updateTheme()
      return
    }

    document.startViewTransition(() => updateTheme())
  }

  return (
    <button
      className="flex size-full items-center justify-center outline-none"
      onClick={toggleMode}
    >
      {mode === "dark" ? (
        <MoonIcon weight="duotone" size={16} />
      ) : (
        <SunIcon weight="duotone" size={16} />
      )}
    </button>
  )
}
