import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login, { action as actionLogin } from './pages/Login'
import {action as actionContacto} from './pages/Contacto'
import {loader as loaderPortafolio} from './pages/Portafolio'
import { PortafolioProvider } from './context/PortafolioProvider'
import Layout from './components/Layout'
import Index from './pages/Index'
import Biografia from './pages/Biografia'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    index: true,
    element: <Index />,
    loader: loaderPortafolio,
    action: actionContacto
  },{
    path: '/biografia',
    element: <Biografia />
  },{
    path: '/portafolio',
    element: <Portafolio />,
    loader: loaderPortafolio
  }, {
    path: '/contacto',
    element: <Contacto />,
    action: actionContacto
  }]
},{
  path: '/login',
  element: <Login />,
  action: actionLogin
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <PortafolioProvider>
        <RouterProvider router={router}/>
      </PortafolioProvider>
  </React.StrictMode>
)
