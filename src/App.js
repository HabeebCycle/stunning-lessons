import EventComponent, {
  Condition5Component,
} from "./components/EventComponent";

function App() {
  return (
    <div>
      <EventComponent />
      <Condition5Component arr={[1, 2, 3]} />
    </div>
  );
}

export default App; //props
