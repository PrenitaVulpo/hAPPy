import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//, Switch
import Landing from './pages/landing';
import MapPage from "./pages/map";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={MapPage}/>
        </BrowserRouter>

    )
}

export default Routes;