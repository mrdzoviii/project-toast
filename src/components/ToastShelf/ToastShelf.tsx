import styles from "./ToastShelf.module.css";
import { useContext } from "react";
import { ToastContext } from "components/ToastProvider";
import Toast from "components/Toast";

function ToastShelf() {
  const { toasts, removeToast } = useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
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
