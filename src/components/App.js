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
import TranslaterProvider from './context/Translater'

function App({language}) {
  return (
    <div className="App">
      <TranslaterProvider>
        <BrowserRouter>
          <Header />
          <div id="body" className="container">
            <div className="row">
                <Switch>
                  <Route path="/pokemon/:id" component={ Show } />
                  <Route path="/pokemons" exact component={ Index } />
                  <Route path="/error" component={ Error } />
                  <Route path="/" component={ Error } />
                </Switch>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </TranslaterProvider>
    </div>
  );
}

export default connect(
  getLanguage,
  { setLanguage: actions.setLanguage }
)(App);
