import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';

const SolicitudesContext = createContext();

const SolicitudesProvider = ({ children }) => {

    const [solicitudes, setSolicitudes] = useState([]);

    return (
        <SolicitudesContext.Provider
            value={{
                solicitudes
            }}
        >

            {children}

        </SolicitudesContext.Provider>
    )

};

export {
    SolicitudesProvider
}

export default SolicitudesContext;