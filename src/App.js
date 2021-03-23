import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactForm from "./components/ContactUs/ContactUs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
