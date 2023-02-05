import CardStyled from "./CardStyled";

const Card = (): JSX.Element => {
  return (
    <CardStyled className="card">
      <h2 className="card__title">How to survive a Bootcamp</h2>
      <p className="card__text">Nobody does it</p>
      <a href="more-info" className="card__action">
        More Info ☠
      </a>
    </CardStyled>
  );
};

export default Card;
