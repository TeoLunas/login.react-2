import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargando, SetCargando] = useState(true)

    const navigate = useNavigate();

    useEffect(() => {
        const auntenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if(!token) {
                SetCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token} `
                }
            }

            try {
                const { data }  = await clienteAxios('/profile', config);

                setAuth(data.userInfo);
                navigate('/solicitudes')
            } catch (error) {
                setAuth({})
            }
                
            SetCargando(false)
            

            
        }

        auntenticarUsuario()
    
    }, [])


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando
            }}
        >

            {children}

        </AuthContext.Provider>
    )

};

export {
    AuthProvider
}

export default AuthContext;