import { FC } from 'react'
import styles from './styles.module.css'
import { User } from '../user/main'

type TProps = {
  
}

export const UsersList: FC<TProps> = ({  }) => {
  return (
    <div className={styles.usersList}>
        <User />
    </div>
  )
}