import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import styled from '@emotion/styled'
import usePortafolio from "../hooks/usePortafolio"
import axios from "axios"
import Error from "../components/Error"

const Contenedor = styled.div`
    height: 100vh;
    background-color: var(--fondo);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContenedorCampo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 40rem;

    &:last-of-type{
        margin-top: 1rem;
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
`

const Boton = styled.input`
    margin-top: 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
    background-color: var(--secundario);
    border: none;
    padding: 1rem;
    border-radius: .5rem;
    transition-property: background-color;
    transition-duration: 300ms;
    width: 100%;

    &:hover{
        background-color: var(--primario);
        cursor: pointer;
    }
`

export const action = async ({ request }) => {
    const formData = await request.formData()
    const datos = Object.fromEntries([...formData])
    const email = formData.get('email')

    let errores = []
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

    if (!regex.test(email)) {
        errores = [...errores, 'Email no válido'];
    }

    if (Object.values(datos).includes('')) {
        errores = [...errores, 'Todos los campos son obligatorios'];
    }
    
    try {
        const data  = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, datos)
        return true
    } catch (error) {
        errores = [...errores, 'Usuario no encontrado']
    }

    if(Object.keys(errores).length > 0){
        return errores;
    }
}

const Login = () => {

    const { handleChange, setAutenticacion } = usePortafolio()
    const navigate = useNavigate()
    const errores = useActionData()

    if(errores == true){
        setAutenticacion(true)
        navigate('/portafolio')
    }

    return (
        <Contenedor>
            <Form method="post">
                {errores && errores.map((error, i)=><Error key={i}>{error}</Error>)}
                <ContenedorCampo>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange} />
                </ContenedorCampo>
                <ContenedorCampo>
                    <label htmlFor="discordId">DiscordID</label>
                    <input type="text" id="discordId" name="discordId" onChange={handleChange} />
                </ContenedorCampo>
                <Boton type="submit" value="Ingresar" />
            </Form>
        </Contenedor>
    )
}

export default Login