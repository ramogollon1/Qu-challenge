import React, { memo } from "react";
import { Planet } from "../../models/Planets";

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet.name} className="mb-2 p-3 border rounded">
          <strong>Name:</strong> {planet.name} <br />
          <strong>Climate:</strong> {planet.climate} <br />
          <strong>Terrain:</strong> {planet.terrain}
        </li>
      ))}
    </ul>
  );
};

const MemoizedPlanetList = memo(PlanetList);

export default MemoizedPlanetList;
