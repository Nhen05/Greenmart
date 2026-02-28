import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Frontend/Layout";
import About from "./components/Frontend/pages/About";
import Home from "./components/Frontend/pages/Home";
import Product from "./components/Frontend/pages/Product";
import Contact from "./components/Frontend/pages/Contact";
import Detail from "./components/Frontend/pages/Detail";
import News from "./components/Frontend/pages/News";
import Layoutad from "./components/Backend/admin/Layoutad";
import Dashboard from "./components/Backend/pages_admin/dashboard"; 
import Raulist from "./components/Backend/pages_admin/Raulist"; 
import Raudel from "./components/Backend/pages_admin/Raudel"; 
import Rauedit from "./components/Backend/pages_admin/Rauedit"; 
import Rauadd from "./components/Backend/pages_admin/Rauadd"; 
import Profile from "./components/Backend/pages_admin/Profile"; 
import Login from "./components/Backend/pages_admin/login"; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu.html" element={<About />} />
          <Route path="/lien-he.html" element={<Contact />} />
          <Route path="/san-pham.html" element={<Product />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/tin-tuc.html" element={<News />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<Layoutad />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/xoa-rau/:id" element={<Raudel />} />
          <Route path="/them-rau.html" element={<Rauadd />} />
          <Route path="/rau-list.html" element={<Raulist />} />
          <Route path="/sua-rau/:id" element={<Rauedit />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>

        {/* Login Route - Outside Layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
