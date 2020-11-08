import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiData, setData] = useState("");
  const [dbData, setDBData] = useState("");

  function callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setData({ apiResponse: res }));
  }

  function callDB() {
    fetch("http://localhost:9000/testDB")
      .then((res) => res.text())
      .then((res) => setDBData({ dbResponse: res }))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
    callDB();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {apiData.apiResponse}
          <br />
          {dbData.dbResponse}
        </a>
      </header>
    </div>
  );
}

export default App;
