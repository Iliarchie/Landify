import React from "react";
import ReactDOM from "react-dom"; // Импортируйте ReactDOM
import "./index.css";

import Header from "./components/header/header";
import Appes from "./components/appes/appes";
import Features from "./components/header/features/features";
import Customers from "./components/customers/customers";
import Achivements from "./components/achivement/achivement";
import World from "./components/world/world";
import Manage from "./components/manage/manage";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Appes />
    <Features />
    <Customers />
    <Achivements />
    <World />
    <Manage />
    <Footer />
  </React.StrictMode>
);
