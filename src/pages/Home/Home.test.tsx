import Home from "./Home";
import { render, screen } from "@testing-library/react";

test("Home renders", async () => {
  render(<Home />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
