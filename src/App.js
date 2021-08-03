import './css/style.css';
import Canvas from './components/Canvas'
import ButtonArea from './components/ButtonArea';
import EditArea from './components/EditArea';
import Shapes from './models/Shapes';

function App() {
  const shapes = new Shapes();
  return (
    <div className="App">
      <ButtonArea shapes={shapes} />
      <Canvas className='canvas' shapes={shapes} />
      <EditArea shapes={shapes} />
    </div>
  );
}

export default App;
