import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData as mockGetData } from "../api";
import StarWarsCharacters from "./StarWarsCharacters";

jest.mock("../api");

test("renders the star wars names", async () => {
  mockGetData.mockResolvedValueOnce();
  // AAA Arrange, Act, Assert
  const { getByText } = render(<StarWarsCharacters />);
});

test("test test", () => {});
