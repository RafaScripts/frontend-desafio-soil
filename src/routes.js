import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logon from "./pages/logon";
import Home from "./pages/home";
import UserNew from "./pages/newUsers";
import Menus from "./pages/Menus";
import NewMenus from "./pages/newMenu";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={logon}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/users/new'} component={UserNew} />
                <Route path={'/users/menu'} exact component={Menus} />
                <Route path={'/users/menu/new'} component={NewMenus} />
            </Switch>
        </BrowserRouter>
    )
}
