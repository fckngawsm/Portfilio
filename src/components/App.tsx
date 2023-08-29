import React from "react";
import "../sass/_index.scss";
import Header from "./Header";
import Container from "./Container";
import Home from "./Home";
import Display from "./Display";
function App() {
  return (
    <div className="page">
      <main className="main">
        <Container>
          <Display>
            <Home />
          </Display>
        </Container>
      </main>
    </div>
  );
}

export default App;
