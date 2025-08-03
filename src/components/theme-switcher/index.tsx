import useDarkMode from "use-dark-mode";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const darkMode = useDarkMode(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <Switch
      className="ml-auto"
      isSelected={darkMode.value}
      onValueChange={(v) => (v ? darkMode.enable() : darkMode.disable())}
      size="lg"
      startContent={<p>🌞</p>}
      endContent={<p>🌚</p>}
      color="secondary"
    />
  );
}
