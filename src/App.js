import React, { createContext, useEffect, useState } from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Order from "./components/Dashboard/Order/Order";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import NotMatch from "./components/NotMatch/NotMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css';

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('userInfo', {
    isSignIn: false,
    name: '',
    email: '',
    photo: '',
  });
  const [selectedService, setSelectedService] = useLocalStorageState('service', {})

  //Initial loading spinner
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?
          <div className='page-loading'>
            <ScaleLoader color='#5A903A' />
          </div>
          :
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <ServiceContext.Provider value={[selectedService, setSelectedService]}>
              <Router>
                <Switch>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <PrivateRoute exact path="/dashboard">
                    <Dashboard />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/order">
                    <Order />
                  </PrivateRoute>
                  <PrivateRoute exact path='/dashboard/review'>
                    <AddReview />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/make-admin">
                    <MakeAdmin />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/add-service">
                    <AddService />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/service">
                    <ServiceList />
                  </PrivateRoute>
                  <Route exact path="*">
                    <NotMatch />
                  </Route>
                  <Route exact path="/">
                  </Route>
                </Switch>
              </Router>
            </ServiceContext.Provider>
          </UserContext.Provider>
      }
    </>

  );
}

export default App;
