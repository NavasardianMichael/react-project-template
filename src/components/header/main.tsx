import { FC } from 'react'
import { Navbar } from './navbar/main'
import { Logo } from './logo/main'
import styles from './styles.module.css'

type TProps = {
  
}

export const Header: FC<TProps> = ({  }) => {
  return (
    <div className={styles.header}>
      <Navbar />
      <Logo />
    </div>
  )
}