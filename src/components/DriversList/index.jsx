import React from "react";
import DriverCard from "../DriverCard";
import { getVisibleItems } from "../../utils/ranking";

const DriversList = ({ title, items, filter }) => {
  const visibleItems = getVisibleItems(items, filter);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h4>{visibleItems.length} pilots</h4>
      </div>
      <div>
        {visibleItems.map(({ id, rank, name, team, points, country }) => (
          <DriverCard
            key={id}
            title={`${rank}. ${name} ${country?.flag}`}
            text1={team}
            text2={`Points ${points}`}
            accentColor={team}
          />
        ))}
      </div>
    </div>
  );
};

export default DriversList;
