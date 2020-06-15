import React from "react";
import renamePerc, { renameNum } from "./rename.js";

export default function Card(props) {
  let borders = {
    facebook: "2px solid hsl(195, 100%, 50%)",
    instagram: "2px solid hsl(37, 97%, 70%)",
    twitter: "2px solid hsl(203, 89%, 53%)",
    youtube: "2px solid hsl(348, 97%, 39%)"
  };

  return (
    <div className="big-card" style={{ borderTop: borders[props.company] }}>
      <p className="at">
        {props.companyIcon} <span>{props.user}</span>
      </p>
      <div className="followers">
        <h1>{renameNum(props.followers)}</h1>
        <p>
          {props.company !== "youtube"
            ? "F O L L O W E R S"
            : "S U B S C R I B E R S"}
        </p>
      </div>
      <p
        className="stats-today"
        style={{ color: props.today < 0 && "hsl(356, 69%, 56%)" }}
      >
        <i className={renamePerc(props.today)[0]} />
        {" " + renamePerc(props.today)[1].slice(1)} Today
      </p>
    </div>
  );
}
