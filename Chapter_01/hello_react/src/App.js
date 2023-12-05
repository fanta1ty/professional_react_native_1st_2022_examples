import "./App.css";
import { useState } from "react";

function Counter() {
  const [numClicks, setNumClicks] = useState(0);
  return (
    <div>
      <p>You have clicked {numClicks} times!</p>
      <button onClick={() => setNumClicks(numClicks + 1)}>Click Me</button>
    </div>
  );
}
function WelcomeMessage(props) {
  return (
    <div>
      <p>Welcome {props.userName}!</p>
      <p>It's nice to see you here!</p>
    </div>
  );
}
function ReactButton() {
  const link = "https://reactjs.org";
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Go To React
      </a>
    </div>
  );
}

function App() {
  const userName = "Thinh Nguyen";
  return (
    <div>
      <WelcomeMessage userName={userName} />
      <ReactButton />
      <Counter />
    </div>
  );
}

export default App;
