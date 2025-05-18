import "./App.css";
import useStore from "./Store";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} bears around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={() => useStore.getState().removeAllBears()}>
        Remove all bears
      </button>
      <button onClick={() => useStore.getState().updateBears(10)}>
        Set bears to 10
      </button>
      <button onClick={() => useStore.getState().updateBears(0)}>
        Set bears to 0
      </button>
      <button onClick={() => useStore.getState().updateBears(5)}>
        Set bears to 5
      </button>
      <button onClick={() => useStore.getState().updateBears(20)}>
        Set bears to 20
      </button>
      <button onClick={() => useStore.getState().updateBears(100)}>
        Set bears to 100
      </button>
      <button onClick={() => useStore.getState().updateBears(50)}>
        Set bears to 50
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Zustand demo</h1>
      <BearCounter />
      <Controls />
    </>
  );
}

export default App;
