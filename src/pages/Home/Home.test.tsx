import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Home renders", async () => {
  render(<Home />);
  expect(screen.getByText(/Go on, add some content/i)).toBeInTheDocument();
});
