import React from "react";
import { CounterContainer } from "./containers/CounterContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer storeKey="abc" />
      <CounterContainer storeKey="abc" />
      <CounterContainer storeKey="def" />
      <CounterContainer storeKey="pom" />
      <CounterContainer storeKey="def" />
    </div>
  );
}

export default App;
