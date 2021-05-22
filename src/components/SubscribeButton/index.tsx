import styles from './styles.module.scss'
import { FaSignature } from 'react-icons/fa'
export function SubscribeButton () {
  return (
      <button
      type="button"
      className={styles.subscribeButton}>
        <FaSignature /> Subscribe Now   
      </button>
    );
}