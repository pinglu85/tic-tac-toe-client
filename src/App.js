import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './container/Form/Form';
import Game from './container/Game/Game';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Form}></Route>
          <Route path="/game" component={Game}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
