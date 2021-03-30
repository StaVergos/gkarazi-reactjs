import './App.css';
import Login from './components/Login';
import Header from "./components/Layout/Header";

const App =() => {
  return (
    <div className="App">
        <Header/>
        <Login />
    </div>
  );
}

export default App;
