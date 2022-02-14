import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logon from "./pages/logon";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/'} component={logon}/>
            </Switch>
        </Router>
    )
}

export default Routes;