import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from 'layouts/header'
import styles from './styles.module.css'

type TProps = {}

export const OutletWithHeader: FC<TProps> = () => {
  return (
    <div className={styles.withHeader}>
      <Header />
      <Outlet />
    </div>
  )
}
