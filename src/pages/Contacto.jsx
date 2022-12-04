import styled from "@emotion/styled"
import { Form, redirect, useActionData } from "react-router-dom"
import Error from "../components/Error"
import Exito from "../components/Exito"
import usePortafolio from "../hooks/usePortafolio"

const Formulario = styled.div`
  background-color: var(--fondo);
  padding: 3rem 0;
`

const Titulo = styled.h1`
  text-align: center;
  margin: 0 0 4rem 0;
  color: var(--primario);
`

const Contenedor = styled.div`
    max-width: 60rem;
    margin: 0 auto;
`

const ContenedorCampo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-top: 2rem;

    &:first-of-type{
      margin-top: 0;
    }

    & label{
        font-weight: 500;
        font-size: 1.7rem;
    }

    & input{
        border: none;
        height: 3rem;
        padding: 0 1rem;
        border-radius: .5rem;
    }

    & textarea{
      border: none;
      height: 18rem;
    }
`

const Boton = styled.input`
    margin-top: 3rem;
    margin-left: 44.5rem;
    text-transform: uppercase;
    font-weight: 800;
    background-color: var(--secundario);
    border: none;
    padding: 1rem 5rem;
    border-radius: .5rem;
    transition-property: background-color;
    transition-duration: 300ms;

    &:hover{
        background-color: var(--primario);
        cursor: pointer;
    }
`

export const action = async ({ request }) => {
  const formData = await request.formData()
  const datos = Object.fromEntries([...formData])
  const email = formData.get('correo')

  let errores = []
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

  if (!regex.test(email)) {
    errores = [...errores, 'Correo no válido']
  }

  if (Object.values(datos).includes('')) {
    errores = [...errores, 'Todos los campos son obligatorios']
  }

  if (Object.keys(errores).length > 0) {
    return errores
  }

  return false
}

const Contacto = () => {
  const { handleChangeContacto, setExitoContacto, exitoContacto, setDatosContacto, datosContacto } = usePortafolio()
  const errores = useActionData()

  const enviarContacto = () => {
    if(errores == false){
      setExitoContacto(true)
      setDatosContacto({
        nombre: '',
        telefono: '',
        correo: '',
        mensaje: ''
      })

      setTimeout(()=> {
        setExitoContacto(false)
      }, 1500)
    }
  }
  
  return (
    <Formulario>
      <Titulo>Contacto</Titulo>
      <Contenedor>
        <Form method="post" noValidate onSubmit={()=>enviarContacto()}>
          {errores && errores.map((error, i)=><Error key={i}>{error}</Error>)}
          {exitoContacto && <Exito>{"Datos Enviados Correctamente"}</Exito>}
          <ContenedorCampo>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" onChange={handleChangeContacto} value={datosContacto.nombre}/>
          </ContenedorCampo>
          <ContenedorCampo>
            <label htmlFor="telefono">Telefono</label>
            <input type="number" id="telefono" name="telefono" onChange={handleChangeContacto} value={datosContacto.telefono}/>
          </ContenedorCampo>
          <ContenedorCampo>
            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" name="correo" onChange={handleChangeContacto} value={datosContacto.correo}/>
          </ContenedorCampo>
          <ContenedorCampo>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" onChange={handleChangeContacto} value={datosContacto.mensaje}></textarea>
          </ContenedorCampo>
          <Boton type="submit" value="Enviar" />
        </Form>
      </Contenedor>
    </Formulario>
  )
}

export default Contacto