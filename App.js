import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Outlet /> {/* This will render the matched route's component */}
      <BrowserRouter>
     <AppRouter />
  </BrowserRouter>
    </div>
  );
}

export default App;