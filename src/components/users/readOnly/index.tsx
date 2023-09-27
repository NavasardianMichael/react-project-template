import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TUser } from 'store/users/types'
import { combineClassNames } from 'helpers/utils/styles'
import styles from './styles.module.css'

type TProps = {
  data: TUser
}

export const ReadOnlyUser: FC<TProps> = ({ data }) => {
  return (
    <Link className={combineClassNames(styles.readOnlyUser, 'link')} to={data.id}>
      {data.name}
    </Link>
  )
}
