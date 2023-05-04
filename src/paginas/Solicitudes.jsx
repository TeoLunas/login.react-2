import useSolicitudes from "../hooks/useSolicitudes."

const Solicitudes = () => {

    const { solicitudes } = useSolicitudes

    return (
        <h1 className="text-4xl font-black">
            Solicitudes
        </h1>
    )
}

export default Solicitudes