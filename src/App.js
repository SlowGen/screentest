import { Provider } from 'react-redux';
import store from './store';
import './css/style.css';
import Canvas from './components/Canvas'
import ButtonArea from './components/ButtonArea';
import EditArea from './components/EditArea';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ButtonArea className="button-area" />
        <Canvas className='canvas' />
        <EditArea className="edit-area" />
      </Provider>
    </div>
  );
}

export default App;
