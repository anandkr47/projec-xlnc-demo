import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App';
import  ImageGallery  from './components/Gallary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your entire application with BrowserRouter */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<App />} /> {/* Define a route for the main App component */}
        <Route path="/gallery" element={<ImageGallery />} /> {/* Define a route for the Gallery component */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
