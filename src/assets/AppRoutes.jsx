import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Content from './components/Content/Content';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} /> {/* Corrigindo a rota */}
    </Routes>
  );
}

export default AppRoutes;
