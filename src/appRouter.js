import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Login from './authentication/login';
import ResetPassword from './authentication/resetPassword';
import Layout from './components/layout';
import AirTravel from './createEvents/airTravel';
import Cinema from './createEvents/cinema';
import Confrence from './createEvents/confrence';
import CreateEvents from './createEvents/events';
import SelectedConfrence from './createEvents/selectedConfrence';
import ViewAddedEvents from './createEvents/viewAddedEvents';
import WeddingEvents from './createEvents/wedding';
import DashBoard from './dashBoard/dashBoard';
import EventDetail from './eventDetails/eventDetails';
import Events from './events/events';
import Profile from './profile/profile';
import Ticket from './tickets/ticket';
import TicketDetails from './tickets/ticketDetails';
import AddEvents from './createEvents/addEvents/addEvents'




const MainRoute = ({ Component, path, exact, purpose, auth, ...rest})=>{
    return(
      <Route exact={exact} path={path} render={(props)=>{
        return(
          <Layout>
            <Component {...props}/>
          </Layout>
        )
      }}/>
    )
  }

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <MainRoute path='/' Component={AirTravel} exact/>
                <Route path='/cinema' component={Cinema} exact />
                <MainRoute path='/confrence' Component={Confrence} exact />
                <MainRoute path="/confrence/add/events" Component={AddEvents} exact/>
                <MainRoute path='/selected-confrence' Component={SelectedConfrence} exact />
                <MainRoute path='/view-events' Component={ViewAddedEvents} exact />
                <Route path='/create-events' component={CreateEvents} exact />
                <MainRoute path='/wedding' Component={WeddingEvents} exact />
                <Route path='/dashboard' component={DashBoard} exact />
                <Route path='/event-details' component={EventDetail} exact />
                <MainRoute path='/events' Component={Events} exact />
                <Route path='/login' component={Login} exact />
                <Route path='/profile' component={Profile} exact />
                <Route path='/resetpassword' component={ResetPassword} exact />
                <Route path='/ticketdetails' component={TicketDetails} exact />
                <Route path='/ticket' component={Ticket} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter