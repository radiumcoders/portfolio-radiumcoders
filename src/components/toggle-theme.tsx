import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"

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

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  function toggleMode() {
    const nextMode: ThemeMode = mode === "light" ? "dark" : "light"
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem("theme", nextMode)
  }

  return (
    <Button variant={"outline"} size={"icon"} onClick={toggleMode}>
      {mode === "dark" ? (
        <MoonIcon weight="duotone" size={16} />
      ) : (
        <SunIcon weight="duotone" size={16} />
      )}
    </Button>
  )
}
