import styles from './styles.module.scss'
import { FaSignature } from 'react-icons/fa'

interface SubscribeButtonProps {
  priceId: string;
}
export function SubscribeButton ({priceId}:SubscribeButtonProps) {
  return (
      <button
      type="button"
      className={styles.subscribeButton}>
        <FaSignature /> Subscribe Now
      </button>
    );
}