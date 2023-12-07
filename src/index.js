import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './componentes/cadastro';
import Consulta from './consulta';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/contatos/cadastrar",
    element: <Cadastro />
  },
  {
    path:"/contatos/consultar",
    element: <Consulta />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);


