import { render } from "@testing-library/react";
import Signup from "../components/Signup/Signup";

test("renders without crashing", () => {
  render(<Signup />);
});
