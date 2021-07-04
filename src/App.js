import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage.js'
import ListStay from './Pages/ListStay'
import DetailLodging from './Pages/DetailLodging';
import NavbarWhite from './Components/NavbarWhite';
import Payment from './Pages/Payment'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/lodging">
            <ListStay />
          </Route>
          <Route path="/detail-lodging/:id" component={DetailLodging}></Route>
          <Route path="/payment/:id" component={Payment}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

