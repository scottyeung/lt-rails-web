import Articles from './components/Articles'
import Session from './components/Session'
import { useContext } from 'react'

import './App.css';

function App() {
  return (
    <div className="App">
      <Session />
      <Articles />
    </div>
  );
}

export default App;
