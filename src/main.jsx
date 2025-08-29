
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import AboutUs from './aboutus';
import Blog from './blog'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} /> {/* <-- Add Blog route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);