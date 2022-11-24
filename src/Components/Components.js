import React from "react";
import "../App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Clientes from "./Clientes";
import ClienteRegistrar from "./ClienteRegistrar";
import Cliente from "./Cliente";
import ClienteActualizar from "./ClienteActualizar";
import ClientesInactivos from "./ClientesInactivos";

// https://medium.com/@nutanbhogendrasharma/step-by-step-consume-rest-api-in-react-application-48388f6c4d9c

const Components = () => {
  return (
    <Router>
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Clientes />} />
          <Route
            exact
            path="/cliente/registrar"
            element={<ClienteRegistrar />}
          />
          <Route path="/cliente/:objectId" element={<Cliente />} />
          <Route
            exact
            path="/cliente/inactivos"
            element={<ClientesInactivos />}
          />
          <Route path="/cliente/update" element={<ClienteActualizar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Components;
