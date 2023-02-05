import styled from "styled-components";

interface ButtonStyledProps {
  size: "small" | "big";
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: darkturquoise;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  width: fit-content;
  height: fit-content;
  font-size: 1.5rem;
  font-family: inherit;

  ${(props) =>
    props.size === "small"
      ? `
    min-width: 8rem;
    min-height: 3rem;
    `
      : `
    min-width: 16rem;
    min-height: 3rem;
    `};

  &:disabled {
    background-color: grey;
  }
`;

export default ButtonStyled;
