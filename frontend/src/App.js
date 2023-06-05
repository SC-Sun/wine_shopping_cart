import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";

function App() {
  const [sideToggle, setSideDrawer] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideDrawer(true)} />
      <SideDrawer show={sideToggle} click={() => setSideDrawer(false)} />
      <Backdrop show={sideToggle} click={() => setSideDrawer(false)} />
      <main>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/product:id" Component={ProductScreen} />
          <Route path="/cart" Component={CartScreen} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
