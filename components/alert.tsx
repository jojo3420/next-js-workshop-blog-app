import styles from './alert.module.css'
import cn from 'classnames'


function Alert({ children, type }: { children: React.ReactNode, type: string}) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}>
      {children}
    </div>
  );
}

export default Alert;
