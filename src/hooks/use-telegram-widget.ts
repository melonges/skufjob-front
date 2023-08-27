import { useEffect } from "react";
export function useTelegramWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    document.head.appendChild(script);
  }, []);
}
