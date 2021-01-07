import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Confrence from './confrence';
import CreateEvents from './events';
import Events from '../events/events';
import SelectedConfrence from './selectedConfrence';
import EventDetail from '../eventDetails/eventDetails';
import AddEvents from './addEvents/addEvents';
import ViewAddedEvents from './viewAddedEvents';


const EventRouter = () => {
    const { path } = useRouteMatch();
   return  <div>
       <Switch>
        <Route path={`${path}`} component={Events} exact />
        <Route path={`${path}/confrence`} component={Confrence} exact />
        <Route path={`${path}/create`} component={AddEvents} exact />
        <Route path={`${path}/selected-confrence`} component={SelectedConfrence} exact />
        <Route path={`${path}/view-events`} component={ViewAddedEvents} exact />
        <Route path={`${path}/create-events`} component={CreateEvents} exact />
        <Route path={`${path}/event-details`} component={EventDetail} exact />
      </Switch>
   </div>
  };

  export default EventRouter;