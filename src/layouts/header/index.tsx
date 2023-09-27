import { FC } from 'react'
import { Navbar } from './navbar'
import { ThemeHandler } from './themeHandler'
import styles from './styles.module.css'

type TProps = {}

export const Header: FC<TProps> = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <ThemeHandler />
    </div>
  )
}
