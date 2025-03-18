import Toast, { Toast as ToastType } from "../Toast";
import styles from "./ToastShelf.module.css";

interface ToastShelfProps {
  queue: ToastType[];
  removeToast: (id: string) => void;
}

function ToastShelf({ queue, removeToast }: ToastShelfProps) {
  return (
    <ol className={styles.wrapper}>
      {queue.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} onClose={() => removeToast(toast.id)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
