import React from "react";
import { Button } from "antd";
import './stylesheets/theme.css';
import './stylesheets/text-documents.css';
import './stylesheets/form-elements.css';
import './stylesheets/aligment.css';
import './stylesheets/custom components.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
