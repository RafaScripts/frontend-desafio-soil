import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logon from './pages/logon';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path={'/'} component={logon} />
        </BrowserRouter>
    );
}