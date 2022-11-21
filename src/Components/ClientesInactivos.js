import React, { useState, useEffect } from "react";

const ClientesInactivos = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clientesInactivos, setClientesInactivos] = useState([]);

  useEffect(() => {
    const servicioActivo = false;

    fetch("/cliente/servicio/" + servicioActivo)
      .then((res) => res.json())
      .then(
        (data) => {          
          setClientesInactivos(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (clientesInactivos) {
    return (
      <div className="container m-1 p-1">
        <ul className="list-group m-1 p-1">
          {clientesInactivos.map((clienteInactivo) => (
            <li
              className="list-group-item m-1"
              key={clienteInactivo.objectId}
            >
              {clienteInactivo.nombre} {clienteInactivo.apellidoPaterno} {clienteInactivo.apellidoMaterno}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default ClientesInactivos;
