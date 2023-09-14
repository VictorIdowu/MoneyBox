import Body from "./Body";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="font-body bg-primary-100">
      <React.StrictMode>
        <BrowserRouter>
          <Body />
          {/* <AppRouter /> Use your router component */}
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
