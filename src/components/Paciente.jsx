

const paciente = ({paciente, setPaciente, eliminarPaciente }) => {

    const {nombre, propietario, direccion, telefono, email, alta, servicio, id} = paciente

    const handleEliminar = () =>{
        const respuesta = confirm('¿Deseas Eliminar este Paciente?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (
        <div className="mx-5 my-10 bg-white shadow-md rounded-xl px-5  py-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Apellido: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Direccion: {''}
                <span className="font-normal normal-case">{direccion}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Telefono: {''}
                <span className="font-normal normal-case">{telefono}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Correo Electronico: {''}
                <span className="font-normal normal-case">
                    {email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">
                    {alta}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Servicio: {''}
                <span className="font-normal normal-case">
                    {servicio}
                </span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button"
                className="py-2 px-10 bg-green-600 hover:bg-indigo-500
                text-white uppercase font-bold rounded-md"
                onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button type="button"
                className="py-2 px-10 bg-red-600 hover:bg-orange-400
                text-white uppercase font-bold rounded-md"
                onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>

        </div>
    );
};

export default paciente;