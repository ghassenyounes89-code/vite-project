
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Shop from './Shop.jsx';
import AboutUs from './AboutUs.jsx';
import Blog from './blog.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);