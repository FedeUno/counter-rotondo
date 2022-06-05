import './App.css';

import { ItemCount } from './components/ItemCount';

function App() {

  return (
    <div className="App">

      <ItemCount initial={1} stock={5} />

    </div>
  );
}

export default App;


