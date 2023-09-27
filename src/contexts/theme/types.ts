import { THEME_TYPES } from 'helpers/constants/theme'

export type ThemeContextType = {
  theme: (typeof THEME_TYPES)[keyof typeof THEME_TYPES]
  toggle: () => void
}
