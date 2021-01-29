import '../assets/stylesheets/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Index from "./Index"
import Show from "./Show"
import Error from "./Error"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

import actions from "../redux/actions"
import { getLanguage } from "../redux/selectors"
import { connect } from "react-redux";

function App({language}) {
  console.log(language);
  return (
    <div className="App">
      <BrowserRouter>
        <Header language={ language } />
        <div id="body" className="container">
          <div className="row">
              <Switch>
                <Route path="/pokemon/:id" render={ (props) =><Show { ...props }  language={language} /> } />
                <Route path="/error" exact render={ (props) =><Error { ...props } language={language}  /> } />
                <Route path="/pokemons" exact render={ (props) =><Index { ...props } language={language}  /> } />
                <Route path="/about_us" exact render={ null } />
                <Route path="/contact_us" exact render={ null } />
                <Route path="/sign_in" exact render={ null } />
                <Route path="/" exact render={ null } />
              </Switch>
          </div>
        </div>
        <Footer language={ language } />
      </BrowserRouter>
    </div>
  );
}

export default connect(
  getLanguage,
  { setLanguage: actions.setLanguage }
)(App);
