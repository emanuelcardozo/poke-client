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
import translater from "../settings/translater"


function App({language}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header translater={ translater[language] } />
        <div id="body" className="container">
          <div className="row">
              <Switch>
                <Route path="/pokemon/:id" render={ (props) =><Show { ...props }  translater={ translater[language] } /> } />
                <Route path="/pokemons" exact render={ (props) =><Index { ...props } translater={ translater[language] }  /> } />
                <Route path="/error" render={ (props) =><Error { ...props } translater={ translater[language] }  /> } />
                <Route path="/" render={ (props) =><Error { ...props } translater={ translater[language] }  /> } />
              </Switch>
          </div>
        </div>
        <Footer translater={ translater[language] } />
      </BrowserRouter>
    </div>
  );
}

export default connect(
  getLanguage,
  { setLanguage: actions.setLanguage }
)(App);
