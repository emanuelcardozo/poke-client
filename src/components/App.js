import '../assets/stylesheets/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Index from "./Index"
import Show from "./Show"
import Error from "./Error"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div id="body" className="container">
          <div className="row">
              <Switch>
                <Route path="/pokemon/:id" component={ Show } />
                <Route path="/error" exact component={ Error } />
                <Route path="/pokemons" exact component={ Index } />
                <Route path="/about_us" exact component={ null } />
                <Route path="/contact_us" exact component={ null } />
                <Route path="/sign_in" exact component={ null } />
                <Route path="/" exact component={ null } />
              </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
