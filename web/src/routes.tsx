import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//, Switch
import Landing from './pages/landing';
import MapPage from "./pages/map";
import Institution from "./pages/Institution";
import CreateInstitution from "./pages/CreateInstitution";
import Orphanage from "./pages/Orphanage";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={MapPage}/>
            <Route path="/institutions/create" component={CreateInstitution}/>
            <Route path="/institutions/:id" component={Institution}/>
            <Route path="/orphanages/:id" component={Orphanage}/>
        </BrowserRouter>

    )
}

export default Routes;