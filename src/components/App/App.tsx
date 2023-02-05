import Button from "../Button/Button";
import Card from "../Card/Card";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Button isDisabled={false} text="Life" type="button" size="small" />
      <Button
        isDisabled={false}
        text="Life or Death"
        type="button"
        size="big"
      />
      <Button isDisabled={true} text="Death" type="button" size="big" />
      <Card />
    </div>
  );
};

export default App;
