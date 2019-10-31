import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import PageHome from "./Pages/PageHome";
import PageServicios from "./Pages/PageServicios";
import PageContacto from "./Pages/PageContacto";





function App() {
  return (
    
      <BrowserRouter>
            <Redirect from="/" to="/pageHome" />
            <Switch>
              <Route exact path = "/pageHome" render = {()=><PageHome/>}/>
              <Route exact path = "/pageServicios" render = {() => <PageServicios/>} />
              <Route exact path = "/pageContacto" render = {() => <PageContacto/>} />
            </Switch>
       </BrowserRouter> 
  
  );
}

export default App ;