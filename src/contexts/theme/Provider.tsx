import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { THEME_TYPES } from 'helpers/constants/theme'
import { ThemeContext } from './context'
import { TThemeContextType } from './types'

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TThemeContextType['theme']>(THEME_TYPES.light)

  const context = useMemo<TThemeContextType>(
    () => ({
      theme,
      toggle: () => setTheme(prev => prev === THEME_TYPES.light ? THEME_TYPES.dark : THEME_TYPES.light),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
}
