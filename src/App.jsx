import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import useCanvasCursor from "./Components/Cursor";
import About from './Components/About';

function App() {

  useCanvasCursor();

  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />
      <div className="parent-container h-screen w-screen px-14">
        <Navbar/>
        <Body/>
      </div>
    </>
  )
}

export default App
