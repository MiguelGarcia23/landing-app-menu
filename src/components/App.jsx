import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../App.css';


function App() {

  return (
    
    <div className="App">

      <Routes>

        <Route path='/' element={ <HomePage /> } />

      </Routes>

    </div>

  );
}

export default App;
