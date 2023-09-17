import { FC } from 'react'
import { Header } from 'components/header/main';
import { UsersList } from 'components/users/list/main';
import styles from './app.module.css';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <UsersList />
    </div>
  );
}

export default App;
