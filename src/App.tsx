import Button from "./components/Botton";

function App() {
  return (
    <>
      <div
        className="flex items-center gap-4 font-semibold
    "
      >
        <Button variant="primary" size="sm">
          Add items
        </Button>
        <Button variant="secondary" size="md">
          Add items
        </Button>
        <Button variant="tertiary" size="lg">
          Add items
        </Button>
        <Button variant="fourthiary" size="xl">
          Add items
        </Button>
      </div>
    </>
  );
}

export default App;
