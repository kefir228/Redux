import React from 'react';
import './App.css';
import { Menu } from './components/Menu/Menu'
import { Public } from './components/Public/Public'
import { Add } from './components/createForm/Add'
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Menu />
        <Routes>
          <Route path='/' element={<Public />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
