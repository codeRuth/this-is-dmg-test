import React from "react";
import { Header } from "./components/Header";
import "./style.css";
function HomePage() {
  return (
    <div className="home-root">
      <Header />
      <section className="home-body"></section>
    </div>
  );
}

export default HomePage;
