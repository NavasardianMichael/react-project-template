import { THEME_TYPES } from 'helpers/constants/theme'

export type TThemeContextType = {
  theme: (typeof THEME_TYPES)[keyof typeof THEME_TYPES]
  toggle: () => void
}
