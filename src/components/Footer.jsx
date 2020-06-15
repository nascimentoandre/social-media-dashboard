import React from "react";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="attribution">
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by <a href="#">André Nascimento</a>.
      </p>
      <p>{year}.</p>
    </div>
  );
}
