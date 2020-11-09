import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from '../api/getColors';

  jest.mock("../api/getColors");

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(colors);

  const { getByText, getAllByTestId } = render(<BubblePage />);
  const title = screen.getByText(/bubbles/i);

  await waitFor(() => {
    expect(getAllByTestId(/colors/i)).toHaveLength(2);
  })
});

const colors = {data: [
  {color: "limegreen", code: {hex: "#99ddbc"}, id: 2},
  {color: "aqua", code: {hex: "#00ffff"}, id: 3}
]}