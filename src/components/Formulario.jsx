import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({Pacientes,setPacientes, paciente, setPaciente}) => {
    
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [servicio, setServicio] = useState('')

    const [error, setError] = useState(false)

   useEffect(() => {
    if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setDireccion(paciente.direccion)
        setTelefono(paciente.telefono)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setServicio(paciente.servicio)
    }
   }, [paciente])

    const generarId =() =>{
        const ramdom = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

       return ramdom + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log('Enviando Formulario')

        //validacion del formulario

        if([nombre, propietario, email, direccion, telefono, alta, servicio].includes('')){
            //console.log('Hay almenos un campo vacio')

            setError(true)
            return
        }
        setError(false)

        //objeto de paciente
        const objetoPaciente ={
            nombre,
            propietario,
            direccion,
            telefono,
            email,
            alta,
            servicio,
            
        }

        if(paciente.id){
            //Editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = Pacientes.map(pacienteState =>{
                return pacienteState.id === paciente.id ? objetoPaciente
                : pacienteState
            })
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //nuevo Registro
              objetoPaciente.id = generarId()
            setPacientes([...Pacientes, objetoPaciente])
        }       

        //reiniciar el form

        setNombre('')
        setPropietario('')
        setDireccion('')
        setTelefono('')
        setEmail('')
        setAlta('')
        setServicio('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center mt-6">
                Ingresa Datos del Paciente</h2>      

            <p className="text-center text-lg mt-6 mb-10">
                Añade Citas y {''} 
                <span className="font-bold text-green-600">
                Administralos</span>    
            </p>      

            <form
                onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mx-5">

                {error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mb-6">
                    <label htmlFor="paciente"
                    className="block text-gray-700 font-bold uppercase">
                    Nombre Paciente
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="paciente"
                    type="text" 
                    placeholder="Nombre del paciente"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="propietario"
                    className="block text-gray-700 font-bold uppercase">
                    Apellido Paciente
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="propietario"
                    type="text" 
                    placeholder="Apellido del paciente"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="direccion"
                    className="block text-gray-700 font-bold uppercase">
                    Direccion Paciente
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="direccion"
                    type="text" 
                    placeholder="Direccion del paciente"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value) }
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="telefono"
                    className="block text-gray-700 font-bold uppercase">
                    Telefono Paciente
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="telefono"
                    type="phone"
                    placeholder="Telefono del paciente"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email"
                    className="block text-gray-700 font-bold uppercase">
                    Correo Electronico
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="email"
                    type="text" 
                    placeholder="correo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="alta"
                    className="block text-gray-700 font-bold uppercase">
                    Cita
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="alta"
                    type="date" 
                    value={alta}
                    onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="servicio"
                    className="block text-gray-700 font-bold uppercase">
                    Tratamiento
                    </label>
                    <input className="border-2 w-full shadow-md rounded-md p-2
                    mt-2 placeholder-gray-400"
                    id="servicio"
                    type="text"
                    placeholder="Tratamiento del paciente"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    />
                </div>

                <input className="bg-rose-700 w-full p-4 shadow-md rounded-md
                text-white uppercase font-bold cursor-pointer hover:bg-green-600
                transition-opacity hover:text-gray-300"
                 type="submit" 
                 value={ paciente.id ? 'Editar Paciente'
                        : 'Agregar Paciente'}
                 />
            </form>
        </div>
    );
};

export default Formulario;