import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Contato from './components/Contato';

import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/contato" exact={true} component={Contato} />
    </Switch>
  </BrowserRouter>,

  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  document.getElementById('root')
);

