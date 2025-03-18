import { createContext, useState, useMemo } from "react";
import { VariantType } from "components/ToastPlayground";

export const ToastContext = createContext<ToastContextType>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

type Toast = {
  id: string;
  variant: VariantType;
  message: string;
};

export type ToastContextType = {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
};

export interface ToastProviderProps {
  children: React.ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastContextValue = useMemo(() => {
    const addToast = (toast: Toast) => {
      setToasts([...toasts, toast]);
    };
    const removeToast = (id: string) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    };
    return { toasts, addToast, removeToast };
  }, [toasts]);

  return <ToastContext value={toastContextValue}>{children}</ToastContext>;
}

export default ToastProvider;
