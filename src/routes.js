import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import logon from "./pages/logon";
import Home from "./pages/home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={logon}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

