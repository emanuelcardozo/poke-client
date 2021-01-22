import logo from '../assets/svgs/logo.svg';
import '../assets/stylesheets/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Index.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={ Index } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
