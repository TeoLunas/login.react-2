import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import clienteAxios from '../config/clienteAxios';
import Alerta from '../components/Alerta';
import useAuth from '../hooks/useAuth'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [alerta, setAlerta] = useState({});

  const { auth, setAuth, cargando } = useAuth();

  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();

    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post('/login', {
        email,
        password
      });

      setAlerta({
        msg: data.msg,
        error: false
      });

      localStorage.setItem('token', data.token)
      setAuth(data)
      
      location.reload();

    } catch (error) {
      setAlerta({
        msg: error.response.data.message,
        error: true
      });
    }
  }

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Iniciar sesion</h1>

      <form
        className="my-10 bg-white shadow rounded-md p-10"
        onSubmit={handleSubmit}
      >

        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >Email</label>
          <input
            id="email"
            type="email"
            placeholder="Tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >Password</label>
          <input
            id="password"
            type="Password"
            placeholder="Tu Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={ (e) => setPasword(e.target.value) }
          />
        </div>

        { msg && <Alerta alerta={alerta}/>}

        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 mb-5 w-full py-3 text-white font-bold uppercase rounded hover:cursor-pointer hover-bg-sky-800 transition-colors"
        />

      </form>

    </>
  )
}

export default Login