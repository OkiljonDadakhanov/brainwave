import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./componenets/Button";
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
