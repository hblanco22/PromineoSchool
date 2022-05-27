import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/header';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <h1 className="bold">Acme Inc. Human Resources Employee Info</h1>
        <br></br>
        <br></br>
        <div>

          <Route exact path='/' component={Create} ></Route>
          
        </div>
        <div style={{ marginTop: 40 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
