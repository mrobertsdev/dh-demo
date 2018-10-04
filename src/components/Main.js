import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import PageDished from '../pages/PageDished';
import PageGrow from '../pages/PageGrow';
import PageUrbanized from '../pages/PageUrbanized';
import PageMapped from '../pages/PageMapped';
import PageVideo from '../pages/PageVideo';
import DemoPage from '../pages/DemoPage';
import NotFound, { NoMatch } from '../pages/NotFound';

const Main = () => (
  <div className="container-inner-wrap">
    <Switch>
      <Redirect from="/home" to="/" />
      <Route exact path="/" component={Home} />
      <Route path="/dished" component={PageDished} />
      <Route path="/grow" component={PageGrow} />
      <Route path="/urbanized" component={PageUrbanized} />
      <Route path="/mapped" component={PageMapped} />
      <Route path="/video" component={PageVideo} />
      <Route exact path="/demo/:id" component={DemoPage} />
      <Route exact path="/demo" component={DemoPage} />
      <Route exact path="/404" component={NotFound} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Main;