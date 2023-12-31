import { FC } from 'react'
import { EditableUser } from 'components/users/editable'
import styles from './styles.module.css'

type TProps = {}

const ProfilePage: FC<TProps> = () => {
  return (
    <div className={styles.profilePage}>
      <EditableUser />
    </div>
  )
}

export default ProfilePage
