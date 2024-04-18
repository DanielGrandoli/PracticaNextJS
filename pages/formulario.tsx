import { useState } from "react"

export default function about() {

    const[TextNombre,SetTextNombre] = useState(String);
    const[TextApellido,SetTextApellido] = useState(String);
    const[TextDireccion,SetTextDireccion] = useState(String);
    const [mostrar,setMostrar] = useState(false);
    


    function guardarDatos(e,tipoInput:String){
        if(tipoInput==="nombre")
        SetTextNombre(e.target.value);
        if(tipoInput==="apellido")
        SetTextApellido(e.target.value);
        if(tipoInput==="direccion")
        SetTextDireccion(e.target.value);
    }


    function Mostrar(e){
        e.preventDefault();
        setMostrar(!mostrar)
    }
    


    return(
        <div>
            <form action="">
            <label htmlFor="Nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" onChange={(e)=>(guardarDatos(e,"nombre"))} value={TextNombre} />
           
            <br></br>
            <label htmlFor="Apellido">Apellido:</label>
            <input type="text" name="apellido" id="apellido" onChange={(e)=>(guardarDatos(e,"apellido"))} value={TextApellido}/>
            
            <br></br>
            <label htmlFor="Direccion">Direccion:</label>
            <input type="text" name="direccion" id="direccion" onChange={(e)=>(guardarDatos(e,"direccion"))} value={TextDireccion}/>
            <br />
            <button onClick={(e)=>Mostrar(e)}>Mostrar</button>

           
        
            </form>

            {mostrar ? (<h1>{TextNombre} - {TextApellido} - {TextDireccion}</h1>) : (null)}

        </div>
    )
} 