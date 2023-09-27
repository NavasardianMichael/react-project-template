import { createContext } from 'react'
import { THEME_TYPES } from 'helpers/constants/theme'
import { TThemeContextType } from './types'

export const ThemeContext = createContext<TThemeContextType>({
  theme: THEME_TYPES.light,
  toggle: () => null,
})
