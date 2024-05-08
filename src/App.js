//npm install react-router
//npm install bootstrap -- And import bootstrap in index.js
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cardrout from "./Card";
import Details from "./Details";
import Todo from "./Todo";
import { Test } from "./Test";
import Stars from "./Star";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cardrout />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </Router>
    // <Todo/>
    // <Test/>
    // <Stars/>
  );
}

export default App;
