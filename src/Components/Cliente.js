import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Cliente = (props) => {
  //var id = props.match.params.id
  const { objectId } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cliente, setCliente] = useState([]);
  const [clienteDireccion, setClienteDireccion] = useState([]);
  const [clienteUbicacion, setclienteUbicacion] = useState([]);
  const [clientePlan, setClientePlan] = useState([]);
  const [clienteRed, setClienteRed] = useState([]);

  useEffect(() => {

    fetch("/cliente/" + objectId)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setCliente(data);
          setIsLoaded(true);
          setClienteDireccion(data.direccion);
          setclienteUbicacion(data.direccion.ubicacion);
          setClientePlan(data.plan);
          setClienteRed(data.plan.red);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [objectId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (cliente) {
    return (
      <div className="container m-1 p-1">
        <div>
          Nombre: {cliente.nombre} {cliente.apellidoPaterno}{" "}
          {cliente.apellidoMaterno}
        </div>
        <div>Teléfono: {cliente.telefono}</div>
        <div>
          Dirección: {clienteDireccion.localidad} {clienteDireccion.colonia}{" "}
          {clienteDireccion.calle} {clienteDireccion.numero}
          <div>
            Ubicación: {clienteUbicacion.latitud} {clienteUbicacion.longitud}
          </div>
        </div>
        <div>
          Plan: {clientePlan.tipo} Costo: {clientePlan.costo}
          <div>
            Red Nombre: {clienteRed.nombre} IP: {clienteRed.ip}
          </div>
        </div>
      </div>
    );
  }
};

export default Cliente;
