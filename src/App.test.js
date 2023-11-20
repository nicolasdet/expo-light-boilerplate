import { render } from "@testing-library/react-native";
import App from "./App";

test("examples of some things", async () => {
  const expectedUsername = "Tu as entre 15 et 18 ans ?";
  const { findByText } = render(<App />);
  const usernameOutput = await findByText(expectedUsername);
  expect(usernameOutput).not.toBe(null);
});
