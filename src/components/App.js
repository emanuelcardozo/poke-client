import '../assets/stylesheets/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Index.js"
import Show from "./Show.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/pokemon/:id" component={ Show } />
          <Route path="/" exact component={ Index } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
