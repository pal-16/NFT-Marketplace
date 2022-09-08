import React from "react";
import "../styles/Creators.css";

const Creators = () => {
  return (
    <div className="creators">
      <div className="creators__headings">
        <div className="creators__title">Creator</div>
        <div className="creators__title">Assets</div>
      </div>

      <div className="creators__content">
        <div className="creators__left">
          {Array.from(Array(3)).map((_, i) => (
            <div className="creators__circle" key={i}></div>
          ))}
        </div>
        <div className="creators__right">
          {Array.from(Array(9)).map((_, i) => (
            <div className="creators__rect" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creators;
