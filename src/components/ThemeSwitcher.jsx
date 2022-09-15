import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";

// Hooks
import useLocalStorage from "./hooks/useLocalStorage";

// Icons
import {
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const [isColorPicking, setIsColorPicking] = useState(false);
  const [hue, setHue] = useLocalStorage("react-todo.color", "240");

  const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-todo.theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--_hue", hue);
  }, [hue]);

  return (
    <aside className={styles.wrapper}>
      <div></div>
      {isColorPicking ? (
        <>
          <button
            className={`btn ${styles.close}`}
            aria-label="close color picking mode"
            onClick={() => setIsColorPicking(false)}
          >
            <XMarkIcon />
          </button>
          <input
            type="range"
            className={styles.picker}
            min="0"
            max="360"
            aria-label="change color theme slider"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div className={styles.btns}>
          <button
            className="btn"
            aria-label={`Switch theme to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            role="switch"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="btn"
            aria-label="enable color picking"
            onClick={() => setIsColorPicking(true)}
          >
            <SwatchIcon />
          </button>
        </div>
      )}
    </aside>
  );
};

export default ThemeSwitcher;
