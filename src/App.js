import React from 'react'
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './components/Mail/Mail';
import EmailList from './components/Emailist/EmailList';
import Header from './components/Header/Header';
import SendMail from './components/SendMail/SendMail';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <div className ="App_body">
          <Sidebar />
            <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/" exact>
                  <EmailList />
                </Route>
            </Switch>
          </div>
          <SendMail />
        </div>
    </Router>
  );
}

export default App;
