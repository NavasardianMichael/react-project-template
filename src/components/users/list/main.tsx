import { FC } from 'react'
import styles from './styles.module.css'
import { User } from '../user/main'

type Props = {
  
}

export const UsersList: FC<Props> = ({  }) => {
  return (
    <div className={styles.usersList}>
        <User />
    </div>
  )
}