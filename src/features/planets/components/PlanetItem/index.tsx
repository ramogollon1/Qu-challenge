import { Planet } from "../../../../models/Planets";

type PlanetItem = {
  planet: Planet;
};

function PlanetItem({ planet }: PlanetItem) {
  return (
    <tr className="mb-2 p-3 border rounded text-center">
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
    </tr>
  );
}

export default PlanetItem;
