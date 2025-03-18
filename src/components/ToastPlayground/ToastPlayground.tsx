import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { useContext, useRef, useState } from "react";
import ToastShelf from "components/ToastShelf";
import { ToastContext, ToastContextType } from "components/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"] as const;
export type VariantType = typeof VARIANT_OPTIONS[number];

function ToastPlayground() {
  const [message, setMessage] = useState<string>("");
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [variant, setVariant] = useState<VariantType>("notice");

  const { addToast } = useContext<ToastContextType>(ToastContext);

  function onToastSubmit(e: React.FormEvent) {
    e.preventDefault();
    addToast({ id: crypto.randomUUID(), message, variant });
    setMessage("");
    setVariant("notice");
    messageRef.current?.focus();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={onToastSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              ref={messageRef}
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={option}>
                <input
                  id={option}
                  type="radio"
                  name="variant"
                  value={option}
                  onChange={(e) => setVariant(e.target.value as VariantType)}
                  checked={option === variant}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button disabled={!message} type="submit">
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
