import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Switch } from 'react-router';
import DetailCard from './components/DetailCard/DetailCard.jsx';
import Dogs from './components/DogsMain/Dogs';


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



    </Switch>

    </div>
  );
}

export default App;
