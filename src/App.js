import {Route, Switch} from 'react-router-dom';
import Login from './containers/Auth/Login';
// import Header from "./components/Layout/Header";

const App =() => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
