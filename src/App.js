import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes, userRoutes } from 'routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map((route, key) => <Route key={key} {...route} />)}
        {userRoutes.map((route, key) => <Route key={key} {...route} />)}
      </Switch>
    </Router>
  );
}

export default App;
