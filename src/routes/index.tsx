import { createBrowserRouter, Navigate } from "react-router-dom";
import HasHeader from "./components/HasHeader";

import CadastroColaborador from "../pages/CadastroColaborador";
import CadastroUsuario from "../pages/CadastroUsuario";
import CalculoDecimo from "../pages/calculos/CalculoDecimo";
import CalculoFerias from "../pages/calculos/CalculoFerias";
import CalculoFolhaPgto from "../pages/calculos/CalculoFolhaPgto";
import Contatos from "../pages/Contatos";
import Home from "../pages/Home";


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
  {
    path: "/calculo/folha-pagamento",
    element: <HasHeader><CalculoFolhaPgto /></HasHeader>,
  },
  {
    path: "/calculo/ferias",
    element: <HasHeader><CalculoFerias /></HasHeader>,
  },
  {
    path: "/calculo/decimo",
    element: <HasHeader><CalculoDecimo /></HasHeader>,
  },
]);

export default router;