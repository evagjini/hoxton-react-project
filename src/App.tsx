import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { AllFlowers } from "./pages/AllFlowers";
import { FlowerDescription } from "./pages/FlowerDescription";
import { Categories } from "./pages/Categories";
import { FlowerItem } from "./pages/FlowerItem";
import { Basket } from "./pages/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/flowers" />} />
          <Route path="/flowers" element={<AllFlowers />} />
          <Route path="/flowers/:id" element={<FlowerDescription />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<FlowerItem />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
