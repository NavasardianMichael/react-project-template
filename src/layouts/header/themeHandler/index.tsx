import { FC, useContext } from 'react'
import { ReactComponent as ThemeToggleIcon } from 'assets/images/theme.svg'
import styles from './styles.module.css'
import { ThemeContext } from 'contexts/theme/context'

type TProps = {}

export const ThemeHandler: FC<TProps> = () => {

  const { toggle } = useContext(ThemeContext)

  return (
    <button className={styles.themeHandler} onClick={() => toggle()}>
      <ThemeToggleIcon />
    </button>
  )
}
