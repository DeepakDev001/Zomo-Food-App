import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import ViewCartDetail from './Components/ViewCartDetail';

function App() {
  //================Main_Return_Function==========//
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ViewCartDetail' element={<ViewCartDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
