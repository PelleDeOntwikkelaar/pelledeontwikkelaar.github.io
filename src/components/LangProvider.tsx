import { useCallback, useEffect, useMemo, useState } from 'react'
import { CONTENT, LANG_STORAGE_KEY, LangContext, type Lang } from '@/lib/i18n'

function readInitialLang(): Lang {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    return stored === 'nl' || stored === 'en' ? stored : 'en'
  } catch {
    // localStorage unavailable (SSR, private mode, test env) — fall back.
    return 'en'
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next)
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: CONTENT[lang] }),
    [lang, setLang]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
