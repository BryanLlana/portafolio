import { useState, createContext } from "react";

const PortafolioContext = createContext();

export const PortafolioProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    email: '',
    discordId: ''
  })

  const [datosContacto, setDatosContacto] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
  })

  const [exitoContacto, setExitoContacto] = useState(false)
  const [autenticacion, setAutenticacion] = useState(false)

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeContacto = e => {
    setDatosContacto({
      ...datosContacto,
      [e.target.name]: e.target.value
    })
  }

  return (
    <PortafolioContext.Provider value={{
      handleChange,
      handleChangeContacto,
      exitoContacto,
      setExitoContacto,
      datosContacto, 
      setDatosContacto,
      autenticacion, 
      setAutenticacion
    }}>
      {children}
    </PortafolioContext.Provider>
  )
}

export default PortafolioContext