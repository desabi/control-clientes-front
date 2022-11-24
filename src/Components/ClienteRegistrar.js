import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ClienteRegistrar() {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [telefono, setTelefono] = useState();
  // direccion
  const [localidad, setLocalidad] = useState('');
  const [colonia, setColonia] = useState('');
  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState();
  // ubicacion
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  // plan
  const [tipo, setTipo] = useState('');
  const [costo, setCosto] = useState();
  // red
  const [redNombre, setRedNombre] = useState('');
  const [ip, setIp] = useState('');

  let navigate = useNavigate();

  const postCliente = () => {
    axios
      .post(`/cliente`, {
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        telefono: telefono,
        direccion: {
          localidad: localidad,
          colonia: colonia,
          calle: calle,
          numero: numero,
          ubicacion: {
            latitud: latitud,
            longitud: longitud
          }        
        },
        plan: {
          tipo: tipo,
          costo: costo,
          red: {
            nombre: redNombre,
            ip: ip
          }
        }
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <h2 className="main-header">Registrar cliente</h2>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Apelliedo Paterno</label>
          <input
            placeholder="Apellido Paterno"
            onChange={(e) => setApellidoPaterno(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Apellido Materno</label>
          <input
            placeholder="Apellido Materno"
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Telefono</label>
          <input
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Field>
        <h3 className="main-header">Direccion</h3>
        <Form.Field>
          <label>Localidad</label>
          <input
            placeholder="Localidad"
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Colonia</label>
          <input
            placeholder="Colonia"
            onChange={(e) => setColonia(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Calle</label>
          <input
            placeholder="Calle"
            onChange={(e) => setCalle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Numero</label>
          <input
            placeholder="Numero"
            onChange={(e) => setNumero(e.target.value)}
          />
        </Form.Field>
        <h4 className="main-header">Ubicación</h4>
        <Form.Field>
          <label>Latitud</label>
          <input
            placeholder="Latitud"
            onChange={(e) => setLatitud(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Longitud</label>
          <input
            placeholder="Longitud"
            onChange={(e) => setLongitud(e.target.value)}
          />
        </Form.Field>
        <h3 className="main-header">Plan</h3>
        <Form.Field>
          <label>Tipo</label>
          <input
            placeholder="Tipo"
            onChange={(e) => setTipo(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Costo</label>
          <input
            placeholder="Costo"
            onChange={(e) => setCosto(e.target.value)}
          />
        </Form.Field>
        <h4 className="main-header">Red</h4>
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            onChange={(e) => setRedNombre(e.target.value)}
          />
          </Form.Field>
          <Form.Field>
          <label>IP</label>
          <input
            placeholder="IP"
            onChange={(e) => setIp(e.target.value)}
          />        
        </Form.Field>
        <Button onClick={postCliente} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
