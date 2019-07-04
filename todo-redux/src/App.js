import React from "react";
import { Route, BrowserRouter, Link } from 'react-router-dom'
import { Home } from "./static/Home";
import { Todo } from "./todos/components/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/todos">Todos</Link>
        </nav>
        <Route path="/" component={Home} exact />
        <Route path="/todos" component={Todo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
