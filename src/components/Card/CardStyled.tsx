import styled from "styled-components";

const CardStyled = styled.section`
  border: 2px solid red;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card {
    &__title {
      margin: 0;
      text-transform: uppercase;
    }

    &__text {
      font-weight: bold;
    }

    &__action {
      text-decoration: none;
      color: inherit;
      background-color: red;
      padding: 8px;
    }
  }
`;

export default CardStyled;
