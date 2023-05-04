import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevaPassword from './paginas/NuevaPassword'
import NuevaSolicitud from './paginas/NuevaSolicitud'

import { AuthProvider } from './context/AuthProvider';
import RutaProtegida from './layouts/RutaProtegida'
import Solicitudes from './paginas/Solicitudes'

import { SolicitudesProvider } from './context/SolicitudesProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <SolicitudesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevaPassword />} />
            </Route>


            <Route path="/solicitudes" element={<RutaProtegida />}>
              < Route index element={<Solicitudes />} />
              < Route path="crear-solicitud" element={<NuevaSolicitud />} />

            </Route>
          </Routes>
        </SolicitudesProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App

// <AuthProvider>