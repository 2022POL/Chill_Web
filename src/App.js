import React from 'react';
import './App.css'
import Home from './Pages/Home';
import Ai from './Pages/Ai';
import Coloring from './Pages/Coloring';
import ColorPallet from './Pages/ColorPallet';
import Pallet_complete from './Pages/Pallet_complete';
import Ai_complete from './Pages/Ai_complete';


import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <main>
        <BrowserRouter> {/* Browser URL과 mapping될 수 있는 부분 */}
            <div className="App">
              <Routes> {/* url이 바뀌었을 때 어떤 component를 렌더링 해서 page역할을 하게 할 것인지*/}
                <Route path="/" element={<Home />} /> { /* path가 index이면 Home component를 렌더링해라*/  }
                <Route path="/ai" element={<Ai />} />
                <Route path="/coloring" element={<Coloring />} />  
                <Route path="/colorPallet" element={<ColorPallet />} />
                <Route path="/Pallet_complete" element={<Pallet_complete />} /> 
                <Route path="/Ai_complete" element={<Ai_complete />} /> 

    
              </Routes>
            </div>
        </BrowserRouter>
    </main>
  );
}

export default App;