import React from "react";

const DriverCard = ({ title, text1, text2, accentColor }) => (
  <div>
    <h2>{title}</h2>
    <div>
      <p accentColor={accentColor}>{text1}</p>
      <p>{text2}</p>
    </div>
  </div>
);

export default DriverCard;
