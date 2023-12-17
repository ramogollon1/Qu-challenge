import { render, screen } from "@testing-library/react";

import PlanetList from ".";
import { mockPlanets } from "../../../../test/fixtures/planets";

test("renders planet 1 item correctly", () => {
  render(<PlanetList planets={mockPlanets} />);
  const nameElement = screen.getByText(new RegExp(mockPlanets[0].name));
  expect(nameElement.textContent).toBeDefined();
});
