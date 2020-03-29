import React from "react";
import Navigation from "./components/navigation/Navigation";
import "./App.scss";
import TopNavbar from "./components/navigation/top-navbar/TopNavbar";

const App = () => {
  return (
    <>
      <div className="app">
        <header>
          <TopNavbar />
        </header>
        <main className="main">
          <div className="sidebar collapse width show" id="navbarSupportedContent">
            <Navigation />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">Test 1</div>
              <div className="col">Test2</div>
            </div>
            <div className="row">
              <div className="col">Test 3</div>
              <div className="col">Test4</div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="col">Footer</div>
        </footer>
      </div>
    </>
  );
};

export default App;
