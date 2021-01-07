import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './authentication/login';
import ResetPassword from './authentication/resetPassword';
import AirTravel from './createEvents/airTravel';
import Cinema from './createEvents/cinema';
import WeddingEvents from './createEvents/wedding';
import DashBoard from './dashBoard/dashBoard';
import Profile from './profile/profile';
import Ticket from './tickets/ticket';
import TicketDetails from './tickets/ticketDetails';
import EventRouter from './createEvents/eventsRoutes'
import MainRoute from './routeLayout';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainRoute path="/events" Component={EventRouter} />
        <MainRoute path='/' Component={AirTravel} exact />
        <Route path='/cinema' component={Cinema} exact />
        <MainRoute path='/wedding' Component={WeddingEvents} exact />
        <Route path='/dashboard' component={DashBoard} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/resetpassword' component={ResetPassword} exact />
        <Route path='/ticketdetails' component={TicketDetails} exact />
        <Route path='/ticket' component={Ticket} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;