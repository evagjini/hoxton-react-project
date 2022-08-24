import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { AllFlowers } from "./pages/AllFlowers";
import { FlowerDescription } from "./pages/FlowerDescription";
// import { Types } from "./pages/Types";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/allFlowers" />} />
          <Route path="/flowers" element={<AllFlowers />} />
          <Route path="/flowers/:id" element={<FlowerDescription />} />
          {/* <Route path="/categores" element={<Types />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
