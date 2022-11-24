import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Clientes = () => {
  const [APIData, setAPIData] = useState([]);

  const [error, SetError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clientes, setClientes] = useState([]);
  

  useEffect(() => {    
    const servicioActivo = true;
    axios.get(`/cliente/servicio/`+servicioActivo).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const getData = () => {
    const servicioActivo = true;
    axios.get(`/cliente/servicio/`+servicioActivo)
    .then( (getData) => {
        setAPIData(getData.data);
    })
  }

  // guardar en localstorage los datos del cliente a actualizar
  const setCliente = (cliente) => {
    
    let { 
      objectId, nombre, apellidoPaterno, apellidoMaterno, telefono,
      direccion: {localidad, colonia, calle, numero, ubicacion: {latitud, longitud}},
      plan: {tipo, costo, red:{nombre: redNombre, ip}} 
  
    } = cliente;
    
    localStorage.setItem("objectId", objectId);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido Paterno", apellidoPaterno);
    localStorage.setItem("Apellido Materno", apellidoMaterno);
    localStorage.setItem("Telefono", telefono);
    localStorage.setItem("Localidad", localidad);
    localStorage.setItem("Colonia", colonia);
    localStorage.setItem("Calle", calle);
    localStorage.setItem("Numero", numero);
    localStorage.setItem("Latitud", latitud);
    localStorage.setItem("Longitud", longitud);
    localStorage.setItem("Tipo", tipo);
    localStorage.setItem("Costo", costo);
    localStorage.setItem("Red Nombre", redNombre);
    localStorage.setItem("IP", ip);    
  };

  const onDelete = (objectId) => {
    axios.delete(`/cliente/${objectId}`)
    .then( () => {
        getData();
    })
  }

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
      <div>
        <div>Usuario</div>
        <div>
          Buscar <input type="text" />
        </div>
        <div>
          <Link to={`/cliente/registrar`}>Registrar cliente</Link>
        </div>
        <div className="">
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Apellido Paterno</Table.HeaderCell>
                <Table.HeaderCell>Apellido Materno</Table.HeaderCell>
                <Table.HeaderCell>Telefono</Table.HeaderCell>
                <Table.HeaderCell>Actualizar</Table.HeaderCell>
                <Table.HeaderCell>Eliminar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {APIData.map((cliente) => {
                return (
                  <Table.Row key={cliente.objectId}>
                    <Table.Cell>{cliente.nombre}</Table.Cell>
                    <Table.Cell>{cliente.apellidoPaterno}</Table.Cell>
                    <Table.Cell>{cliente.apellidoMaterno}</Table.Cell>
                    <Table.Cell>{cliente.telefono}</Table.Cell>
                    <Link to="/cliente/update">
                      <Table.Cell>
                        <Button onClick={() => setCliente(cliente)}>
                          Actualizar
                        </Button>
                      </Table.Cell>
                    </Link>
                    <Table.Cell>
                      <Button onClick={() => onDelete(cliente.objectId)} >
                        Eliminar
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
        <div>
          <button>Corte de caja</button>
        </div>
        <div>
          <Link to={`cliente/inactivos`}>
            Ver clientes con servicio inactivo
          </Link>
        </div>
      </div>
    );
  }
};

export default Clientes;
