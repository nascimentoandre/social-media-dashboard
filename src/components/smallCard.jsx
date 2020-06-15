import React from "react";
import renamePerc, { renameNum } from "./rename.js";

export default function SmallCard(props) {
  return (
    <div className="small-card">
      <div className="small-item">
        <span
          className="small-title"
          style={{
            color: "hsl(230, 17%, 14%)",
            fontSize: "0.8rem",
            position: "relative",
            top: "0.3rem"
          }}
        >
          {props.title}
        </span>
        <span>{props.companyIcon}</span>
      </div>
      <div className="small-item">
        <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
          {renameNum(props.num)}
        </span>
        <span
          className="stats-today"
          id="small-stats"
          style={{ color: props.perc < 0 && "hsl(356, 69%, 56%)" }}
        >
          <i className={renamePerc(props.perc)[0]} />
          {renamePerc(props.perc)[1]}%
        </span>
      </div>
    </div>
  );
}
