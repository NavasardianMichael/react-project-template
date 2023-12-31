import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from 'routes/routes'
import { combineWithNavLinkActiveClassName } from 'helpers/utils/styles'
import styles from './styles.module.css'

type TProps = {}

export const Navbar: FC<TProps> = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to={ROUTES.home} className={combineWithNavLinkActiveClassName(styles.active, 'link')}>
        Home
      </NavLink>
      <NavLink to={ROUTES.users} className={combineWithNavLinkActiveClassName(styles.active, 'link')}>
        Users
      </NavLink>
    </div>
  )
}
