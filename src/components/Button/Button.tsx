import ButtonStyled from "./ButtonStyled";

export interface ButtonProps {
  text: string;
  isDisabled: boolean;
  size: "small" | "big";
  type: "button" | "submit";
}

const Button = ({ isDisabled, text, type, size }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      type={type}
      size={size}
      className="button"
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
