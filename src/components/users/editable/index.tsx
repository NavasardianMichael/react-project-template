import { ChangeEventHandler, FC, FormEventHandler, useEffect, useState } from 'react'
import { selectVisitedUser, selectVisitedUserId } from 'store/users/selectors'
import { setVisitedUserId } from 'store/users/slice'
import { getUserAsync, setUserOptionsAsync } from 'store/users/thunks'
import { TUser } from 'store/users/types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useUserIdFromPath } from 'hooks/useUserIdFromPath'
import styles from './styles.module.css'

type TProps = {}

export const EditableUser: FC<TProps> = () => {
  const dispatch = useAppDispatch()
  const userIdFromPath = useUserIdFromPath()
  const visitedUserId = useAppSelector(selectVisitedUserId)
  const user = useAppSelector(selectVisitedUser)

  const [values, setValues] = useState<Omit<TUser, 'id'>>({
    name: user?.name ?? '',
    email: user?.email ?? '',
  })

  useEffect(() => {
    dispatch(setVisitedUserId(userIdFromPath))
  }, [dispatch, userIdFromPath])

  useEffect(() => {
    if (!visitedUserId) return

    dispatch(getUserAsync({ id: visitedUserId }))
  }, [dispatch, visitedUserId])

  useEffect(() => {
    if (!user) return

    setValues({
      name: user.name,
      email: user.email,
    })
  }, [user])

  useEffect(() => {
    return () => {
      dispatch(setVisitedUserId(''))
    }
  }, [dispatch])

  const handleChange = (fieldName: keyof Omit<TUser, 'id'>): ChangeEventHandler<HTMLInputElement> => {
    return (e) => {
      setValues((prev) => ({
        ...prev,
        [fieldName]: e.target.value,
      }))
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    dispatch(
      setUserOptionsAsync({
        ...values,
        id: user.id,
      })
    )
  }

  return (
    <div className={styles.editableUser}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="user-name">Name</label>
          <input id="user-name" value={values.name} onChange={handleChange('name')} />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="user-email">Email</label>
          <input id="user-email" value={values.email} onChange={handleChange('email')} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
