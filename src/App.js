import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Users from './component/Users'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Users}>

      </Route>
      
    </div>
  );
}

export default App;
