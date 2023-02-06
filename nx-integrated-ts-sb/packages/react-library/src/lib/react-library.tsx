import styles from './react-library.module.scss';

/* eslint-disable-next-line */
export interface ReactLibraryProps {}

export function ReactLibrary(props: ReactLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactLibrary!</h1>
    </div>
  );
}

export default ReactLibrary;
