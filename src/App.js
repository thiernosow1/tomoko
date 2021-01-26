import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import 'normalize.css';

import Home from "./composants/home";
import Menu from './composants/menu';


function App() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/menu" component={Menu} />

            <Route path="*" component={() => <p>Page Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;