import { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  return (
    <div style={{
      display: "flex",
      gap: 5
    }}>
      <Link to={"/exam2"}>exam 2</Link>
      <Link to={"/exam3"}>exam 3</Link>
      <Link to={"/exam4"}>exam 4</Link>
    </div>
  );
}

export default App;
