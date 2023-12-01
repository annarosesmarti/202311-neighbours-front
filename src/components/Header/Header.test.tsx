import { screen } from "@testing-library/react";
import Header from "./Header";
import customRender from "../../testUtils/customRender";
import mockNeighbours from "../../mocks/mockNeighbours";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alt text 'Mi comunidad favorita logo'", () => {
      const expectedAltText = "Mi comunidad favorita logo";
      const mockData = mockNeighbours;

      customRender(<Header />, mockData);
      const altText = screen.getByRole("img", { name: expectedAltText });

      expect(altText).toBeInTheDocument();
    });
  });
});
