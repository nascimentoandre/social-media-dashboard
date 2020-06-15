import React, { useState } from "react";
import jQuery from "jquery";

export default function Header() {
  let [darkMode, setDarkMode] = useState(true);

  function changeDarkMode() {
    setDarkMode(!darkMode);
    const itemsChanged = [
      "header",
      "body",
      ".big-card",
      ".small-card",
      "body",
      ".at span",
      ".followers p",
      ".small-title",
      ".attribution a",
      "#overview"
    ];

    const darkColors = [
      "hsl(232, 19%, 15%)",
      "hsl(230, 17%, 14%)",
      "hsl(228, 28%, 20%)",
      "hsl(228, 28%, 20%)",
      "white",
      "hsl(228, 34%, 66%)",
      "hsl(228, 34%, 66%)",
      "hsl(228, 34%, 66%)",
      "rgb(192,192,192)",
      "white"
    ];

    const lightColors = [
      "hsl(225, 100%, 98%)",
      "white",
      "hsl(227, 47%, 96%)",
      "hsl(227, 47%, 96%)",
      "hsl(230, 17%, 14%)",
      "hsl(230, 17%, 14%)",
      "hsl(228, 12%, 44%)",
      "hsl(230, 17%, 14%)",
      "hsl(228, 45%, 44%)",
      "hsl(230, 17%, 14%)"
    ];
    if (darkMode) {
      for (let i = 0; i <= 3; i++) {
        jQuery(itemsChanged[i]).css("background-color", darkColors[i]);
      }
      for (let j = 4; j <= 9; j++) {
        jQuery(itemsChanged[j]).css("color", darkColors[j]);
      }
    } else {
      for (let i = 0; i <= 3; i++) {
        jQuery(itemsChanged[i]).css("background-color", lightColors[i]);
      }
      for (let j = 4; j <= 9; j++) {
        jQuery(itemsChanged[j]).css("color", lightColors[j]);
      }
    }
  }

  return (
    <header>
      <div className="main-title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="dark-mode">
        <span>Dark mode</span>
        <label className="switch">
          <input onClick={changeDarkMode} type="checkbox" />
          <span className="slider round" />
        </label>
      </div>
    </header>
  );
}
