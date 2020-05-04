import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { mainRoute } from './routes'

ReactDOM.render(
  <Router>
    <Switch>
      {
        mainRoute.map(item => {
          return (
            <Route key={item.pathname} path={item.pathname } component={item.component} exact />
          )
        })
      }
      <Route path={'/index'} component={App} />
      <Redirect to={'/index'} from={'/'} exact />
      <Redirect to={'/404'} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
