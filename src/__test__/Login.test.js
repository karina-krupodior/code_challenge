import { render } from "@testing-library/react";
import Login from "../components/Login/Login";

it("renders without crashing", () => {
  render(<Login />);
});
