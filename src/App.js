import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import More from "./components/More";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/more" component={More} />
          <Route path="/:post_id" component={Post} />
        </Switch>

        {/* <Route path="/posts/:post_id" component={Post} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
