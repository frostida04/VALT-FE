import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './layouts/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Eventlist from './layouts/Eventlistbar';
import Invite from './pages/Invite';
import Purchase from './pages/Purchase';
import Complete from './pages/Complete';
import Addevent from './pages/Add_event';
import AdminHome from './pages/Admin/AdminHome';
import Organizers from './pages/Admin/Organizers';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/detail" element={<Detail/>} />
        <Route path="/invite" element={<Invite/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/complete" element={<Complete/>} />
        <Route path="/addevent" element={<Addevent/>} />
        <Route path="/admin" element={ <AdminHome />}/>
        <Route path="/admin_organizer" element={ <Organizers />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
