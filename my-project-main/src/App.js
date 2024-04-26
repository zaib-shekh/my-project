import React from 'react';
import './index.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contacts from './routes/Contacts';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/project"element={<Project/>} />
      <Route path="/about"element={<About/>} />
      <Route path="/contacts"element={<Contacts/>} />
    </Routes>
    </>
  );
}

export default App;
