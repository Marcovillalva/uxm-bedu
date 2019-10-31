import React from 'react';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';
import PageHome from "./Pages/PageHome";
import PageServicios from "./Pages/PageServicios";
import PageContacto from "./Pages/PageContacto";





function App() {
  return (
    
      <BrowserRouter>
          
            <Switch>
              <Route exact path = "/pageHome" render = {()=><PageHome/>}/>
              <Route exact path = "/pageServicios" render = {() => <PageServicios/>} />
              <Route exact path = "/pageContacto" render = {() => <PageContacto/>} />
            </Switch>
       </BrowserRouter> 
  
  );
}

export default App ;