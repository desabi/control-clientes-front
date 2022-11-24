import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ClienteActualizar() {
  let navigate = useNavigate();

  const [objectId, setObjectId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [telefono, setTelefono] = useState();
  // direccion
  const [localidad, setLocalidad] = useState("");
  const [colonia, setColonia] = useState("");
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState();
  // ubicacion
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  // plan
  const [tipo, setTipo] = useState('');
  const [costo, setCosto] = useState();
  // red
  const [redNombre, setRedNombre] = useState('');
  const [ip, setIp] = useState('');

  useEffect(() => {
    setObjectId(localStorage.getItem("objectId"));
    setNombre(localStorage.getItem("Nombre"));
    setApellidoPaterno(localStorage.getItem("Apellido Paterno"));
    setApellidoMaterno(localStorage.getItem("Apellido Materno"));
    setTelefono(localStorage.getItem("Telefono"));
    setLocalidad(localStorage.getItem("Localidad"));
    setColonia(localStorage.getItem("Colonia"));
    setCalle(localStorage.getItem("Calle"));
    setNumero(localStorage.getItem("Numero"));
    setLatitud(localStorage.getItem("Latitud"));
    setLongitud(localStorage.getItem("Longitud"));
    setTipo(localStorage.getItem("Tipo"));
    setCosto(localStorage.getItem("Costo"));
    setRedNombre(localStorage.getItem("Red Nombre"));
    setIp(localStorage.getItem("IP"));    
  }, []);

  const updateAPIData = () => {
    axios
      .put(`/cliente/${objectId}`, {
        nombre, apellidoPaterno, apellidoMaterno, telefono,
        direccion: {
            localidad, colonia, calle, numero,
            ubicacion: {
                latitud, longitud
            }
        },
        plan: {
            tipo, costo,
            red: {
                nombre: redNombre,
                ip
            }
        }
         
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Apellido Paterno</label>
          <input
            placeholder="Apellido Paterno"
            value={apellidoPaterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Apellido Materno</label>
          <input
            placeholder="Apellido Materno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Telefono</label>
          <input
            placeholder="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Field>
        <h3 className="main-header">Direccion</h3>
        <Form.Field>
          <label>Localidad</label>
          <input
            placeholder="Localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Colonia</label>
          <input
            placeholder="Colonia"
            value={colonia}
            onChange={(e) => setColonia(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Calle</label>
          <input
            placeholder="Calle"
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Numero</label>
          <input
            placeholder="Numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Form.Field>
        <h4 className="main-header">Ubicación</h4>
        <Form.Field>
          <label>Latitud</label>
          <input
            placeholder="Latitud"
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Longitud</label>
          <input
            placeholder="Longitud"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </Form.Field>
        <h3 className="main-header">Plan</h3>
        <Form.Field>
          <label>Tipo</label>
          <input
            placeholder="Tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Costo</label>
          <input
            placeholder="Costo"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Nombre</label>
          <input
            placeholder="Nombre"
            value={redNombre}
            onChange={(e) => setRedNombre(e.target.value)}
          />
          </Form.Field>
          <Form.Field>
          <label>IP</label>
          <input
            placeholder="IP"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />        
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
