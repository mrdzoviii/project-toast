import { useEffect } from "react";

export function useEscape(callback: () => void) {
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      if (event.key === "Escape") {
        callback();
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);
}
