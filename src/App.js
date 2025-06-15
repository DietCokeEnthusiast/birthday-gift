import './App.css';
import Slideshow from './components/Slideshow';
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import LoveLetter from './components/LoveLetter';


function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Confetti width={width} height={height} />
      <h1>Happy Birthday, Kaitlyn!!!💖</h1>
      <p>I made you a little web site because you're amazing 💖</p>
      <Slideshow />
      <LoveLetter />
    </div>
  );
}

export default App;
