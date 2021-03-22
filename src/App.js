import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
