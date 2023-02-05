import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button", () => {
  describe("When it receives a text 'hello'", () => {
    test("Then it shoul show a button with a text inside 'hello'", () => {
      const buttonText = "hello";

      render(
        <Button isDisabled={false} size="big" type="button" text={buttonText} />
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
