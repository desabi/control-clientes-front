import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Clientes = () => {
  const [error, SetError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const servicioActivo = true;

    fetch("/cliente/servicio/" + servicioActivo)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setClientes(data);
        },
        (error) => {
          setIsLoaded(true);
          SetError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div>
            Usuario
        </div>
        <div>
            Buscar <input type='text' />
        </div>
        <div>
          <Link to={`/cliente/registrar`}>Registrar cliente</Link>
        </div>
        <div className="">
          <ul className="list-group m-1 p-1">
            {clientes.map((cliente) => (
              <li
                className="list-group-item"
                key={cliente.objectId}
              >
                <Link to={`cliente/${cliente.objectId}`}>
                  {cliente.nombre} {cliente.apellidoPaterno}{" "}
                  {cliente.apellidoMaterno}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <button>Corte de caja</button>
        </div>
        <div>
          <Link to={`cliente/inactivos`}>Ver clientes con servicio inactivo</Link>
        </div>
      </div>
    );
  }
};

export default Clientes;
