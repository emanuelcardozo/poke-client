import '../assets/stylesheets/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Index from "./Index"
import Show from "./Show"
import Error from "./Error"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8 main_content">
            <BrowserRouter>
              <Switch>
                <Route path="/pokemon/:id" component={ Show } />
                <Route path="/error" exact component={ Error } />
                <Route path="/" exact component={ Index } />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
