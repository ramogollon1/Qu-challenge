import React, { memo } from "react";
import { Planet } from "../../../../models/Planets";
import PlanetItem from "../PlanetItem";

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  return (
    <ul>
      {planets.map((planet: Planet) => (
        <PlanetItem key={planet.name} planet={planet} />
      ))}
    </ul>
  );
};

const MemoizedPlanetList = memo(PlanetList);

export default MemoizedPlanetList;
