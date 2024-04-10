import { useState } from 'react';
import './App.css';
import OverviewMaps from "../src/pages/OverviewMapsPage/OverviewMaps";
import Landing from "../src/pages/LandingPage/Landing";
import Dashboard from "../src/pages/Dashboard/DashBoard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/OverviewMaps" element={<OverviewMaps />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
