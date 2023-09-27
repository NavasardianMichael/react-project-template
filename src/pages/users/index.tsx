import { FC } from 'react'
import { UsersList } from 'components/users/list'
import styles from './styles.module.css'

type TProps = {}

const UsersPage: FC<TProps> = () => {
  return (
    <div className={styles.usersPage}>
      <UsersList />
    </div>
  )
}

export default UsersPage
