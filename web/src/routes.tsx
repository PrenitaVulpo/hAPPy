import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//, Switch
import Landing from './pages/landing';
import MapPage from "./pages/map";
import Institution from "./pages/Institution";
import CreateInstitution from "./pages/CreateInstitution";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={MapPage}/>
            <Route path="/institutions/create" component={CreateInstitution}/>
            <Route path="/institutions/:id" component={Institution}/>
        </BrowserRouter>

    )
}

export default Routes;