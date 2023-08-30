import React from "react";
import "../sass/_index.scss";
import Header from "./Header";
import Container from "./Container";
import Home from "./Home";
import Display from "./Display";
import Navigation from "./Navigation";
function App() {
  return (
    <div className="page">
      <main className="main">
        <Container>
          <Display>
            <Home />
            <Navigation />
          </Display>
        </Container>
      </main>
    </div>
  );
}

export default App;
