import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Switch } from 'react-router';
import DetailCard from './components/DetailCard/DetailCard.jsx';
import Dogs from './components/DogsMain/Dogs';
import CreateNewDog from './components/CreateNewDog/CreateNewDog';
import NotFound from './components/404NotFound/NotFound';


function App() {
  return (
    <div className="App">
     
    <Switch>

      <Route exact path ="/">
        <LandingPage />
      </Route>
      <Route exact path="/dogs">
        <Dogs/>
      </Route>
      <Route path="/dogs/:id">
        <DetailCard />
      </Route>
      <Route path="/createDog">
        <CreateNewDog />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>


    </Switch>

    </div>
  );
}

export default App;
