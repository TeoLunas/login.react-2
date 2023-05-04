import { useContext} from 'react';
import SolicitudesContext from '../context/SolicitudesProvider';

const useSolicitudes = () => {
    return useContext(SolicitudesContext)
}

export default useSolicitudes;