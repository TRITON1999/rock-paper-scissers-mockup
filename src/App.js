import React, { useState } from "react";
import "./App.css";
import EntryPage from "./component/EntryPage";

function App() {
  const [changingPage, setChangePage] = useState(true);
  const funChangingPage = () => setChangePage(!changingPage);
  return (
    <div className="app">
      {changingPage ? (
        <EntryPage funChangingPage={funChangingPage} />
      ) : (
        <h1>changed</h1>
      )}
    </div>
  );
}

export default App;
