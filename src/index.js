import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import Detalhe from './componentes/detalhe'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contatos/cadastrar",
        element: <Cadastro />
      },
      {
        path: "/contatos/consultar",
        element: <Consulta />
      },
      {
        path: "/contatos/detalhes/:idContato", 
        element: <Detalhe />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);


