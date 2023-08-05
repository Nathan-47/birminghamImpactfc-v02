import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/style.scss';
import Footer from './components/Footer';
import HomeNav from './pages';
import Register from './pages/register';
import Landing from './pages/Landing';
import Contact from './pages/contact';
import Legacy from './pages/legacy';
import Rules from './pages/rules';
import Accreditedclubnews from './pages/accreditedclubnews';
import NotExist from './NotExist';
import Matches from './pages/matches';
import Teams from './pages/teams';

function App() {
  
  return (
    <Router>
      <HomeNav />
      <Switch>

      <Route exact path="/">
      <Landing />
      </Route>

      <Route exact path="/register">
      <Register />
      </Route>

      <Route exact path="/matches">
      <Matches />
      </Route>

      <Route exact path="/teams">
      <Teams />
      </Route>

      <Route exact path="/contact">
      <Contact />
      </Route>

      <Route exact path="/legacy">
      <Legacy />
      </Route>

      <Route exact path="/rules">
      <Rules />
      </Route>

      <Route exact path="/accreditedclubnews" component={Accreditedclubnews}/>

      <Route path="*">
        <NotExist />
      </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
