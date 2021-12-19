import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }
  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  
  const toggleMode = (cls) => {
    
    removeBodyClass();

    document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode disabled", "success")
      document.title = 'TextUtils - white Mode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          </Route>
        </Switch>

      </div>
    </Router>
    </>
  )
}

export default App;
