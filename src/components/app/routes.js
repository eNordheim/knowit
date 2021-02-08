import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../modules/dashboard';
import PAGES from '../../constants/pages';


const App = () => (
    <Router>
        <Switch>
            <Route path={PAGES.DASHBOARD} exact component={Dashboard} />
        </Switch>
    </Router>
);

export default App;
