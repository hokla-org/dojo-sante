import { act, render } from "@testing-library/react";
import Home from "./Home";
import React from "react";
import { PatientWithWarnings } from "../../types/Patient";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => {
  const reactRouterDom = jest.requireActual("react-router-dom");

  return {
    ...reactRouterDom,
    useNavigate: jest.fn(),
  };
});

const mockPatients: PatientWithWarnings[] = [
  {
    id: "0",
    name: "Maxime Crampon",
    email: "maximec@hokla.com",
    birthdate: "1996-11-19",
    generalPractitioner: "Dr. Burris",
    warnings: [],
  },
  {
    id: "1",
    name: "Raphaël Dhôte",
    email: "raphaeld@hokla.com",
    birthdate: "1998-01-26",
    generalPractitioner: "Dr. Burris",
    warnings: [],
  },
];

jest.mock("../../hooks/usePatientsWithMedicalWarnings", () => ({
  usePatientsWithMedicalWarnings: () => mockPatients,
}));

describe("[Component] Home", () => {
  beforeEach(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  describe("Search", () => {
    it("should filter the list of displayed patients when the user types something in the search bar", async () => {
      const homeComponent = render(<Home />);

      const searchBar = homeComponent.getByTestId("search-bar");

      await act(() => userEvent.type(searchBar, "Crampon"));

      const maxime = homeComponent.getByText("Maxime Crampon");
      expect(maxime).toBeInTheDocument();

      const raphael = homeComponent.queryByText("Raphaël Dhôte");
      expect(raphael).not.toBeInTheDocument();
    });
  });
});
