import { createBrowserRouter, Navigate } from "react-router-dom";
import CadastroColaborador from "../pages/CadastroColaborador";
import CadastroUsuario from "../pages/CadastroUsuario";
import Contatos from "../pages/Contatos";
import Home from "../pages/Home";
import HasHeader from "./components/HasHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "/home",
    element: <HasHeader><Home /></HasHeader>,
  },
  {
    path: "/contatos",
    element: <HasHeader><Contatos /></HasHeader>,
  },
  {
    path: "/cadastro/usuario",
    element: <HasHeader><CadastroUsuario /></HasHeader>,
  },
  {
    path: "/cadastro/colaborador",
    element: <HasHeader><CadastroColaborador /></HasHeader>,
  },
]);

export default router;