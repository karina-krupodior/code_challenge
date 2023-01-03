import { render } from "@testing-library/react";
import ProfilePage from "../components/ProfilePage";

test("renders without crashing", () => {
  render(<ProfilePage />);
});
