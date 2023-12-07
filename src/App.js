import logo from './logo.svg';
import './App.css';
import {Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Agenda</h1>
      <nav>
        <Link to='/contatos/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/contatos/consultar'>Consulta</Link> &nbsp;
        <Link to='/contatos/detalhes/10'>Detalhes</Link>
      </nav>
      <main>
         <Outlet />
      </main>
    </div>
  );
}

export default App;
