import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/landing';
import Map from "./pages/map";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={Map}/>
        </BrowserRouter>

    )
}

export default Routes;