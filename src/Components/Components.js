import React from 'react';

import {
    BrowserRouter as Router,    
    Route,
    Routes    
} from "react-router-dom";

import Clientes from './Clientes';
import Cliente from './Cliente';
import ClientesInactivos from './ClientesInactivos';

// https://medium.com/@nutanbhogendrasharma/step-by-step-consume-rest-api-in-react-application-48388f6c4d9c

const Components = () => {
    return(
        <Router>
            <Routes>                
                <Route exact path="/" element={<Clientes />} />
                <Route path = "/cliente/:objectId" element={<Cliente />} />
                <Route exact path="/cliente/inactivos" element={<ClientesInactivos />} />            
            </Routes>                                
        </Router>
    );
};

export default Components;