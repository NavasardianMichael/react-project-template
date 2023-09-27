import { FC } from 'react'
import { ReactComponent as Spinner } from 'assets/images/spinner.svg'
import styles from './styles.module.css'

type TProps = {}

export const Loader: FC<TProps> = () => {
  return (
    <div className={styles.loader}>
      <Spinner />
    </div>
  )
}
