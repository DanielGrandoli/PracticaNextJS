import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";



const host="http://localhost:3000";

export default function about() {

    const[TextNombre,SetTextNombre] = useState(String);
    const[TextApellido,SetTextApellido] = useState(String);
    const[TextEmail,SetTextEmail] = useState(String);
    const [mostrar,setMostrar] = useState(false);
    const [TextDni,setTextDni] = useState()
    const [Usuarios,getUsuarios] = useState([]);

    useEffect(()=>{
        fetch(host+'/usuario')
        .then(res => res.json())
        .then(res => getUsuarios(res))
        .catch(error => console.error('Error fetching mesas:', error));
    }, []);


    function guardarDatos(e,tipoInput:String){
        if(tipoInput==="nombre")
        SetTextNombre(e.target.value);
        if(tipoInput==="apellido")
        SetTextApellido(e.target.value);
        if(tipoInput==="email")
        SetTextEmail(e.target.value);
        if(tipoInput==="dni")
        setTextDni(e.target.value)
    }


    function Mostrar(e){
        e.preventDefault();
        setMostrar(!mostrar)
    }
    
    function cargarUsuario(e){
        e.preventDefault();
        

        fetch(host+"/usuario", {
            method: "POST",
            headers: {
            "Content-type": "application/json",
            },
            body: JSON.stringify({

            dni: TextDni,
            nombre: TextNombre,
            apellido: TextApellido,
            email: TextEmail
                
        }),
      })
     .then((response) => {
        if(response.ok){
       
        console.log("usuario cargado");
        window.location.reload();
        }
        else{
            throw new Error("Error en la solicitud.");
      }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error.message);
 
        });
        }


    return(
        <div >
            <h1>Formulario Usuario</h1>
            <div className="mb-3">
            <label htmlFor="Dni" className="form-label">Dni:</label>
            <input type="number" className="form-control" name="Dni" id="Dni" onChange={(e)=>(guardarDatos(e,"dni"))} value={TextDni}/>
            </div>
            <div className="mb-3">
            <label htmlFor="Nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" name="nombre" id="nombre" onChange={(e)=>(guardarDatos(e,"nombre"))} value={TextNombre} />
            </div>
            
           
            <div className="mb-3">     
            <label htmlFor="Apellido" className="form-label">Apellido:</label>
            <input type="text" className="form-control" name="apellido" id="apellido" onChange={(e)=>(guardarDatos(e,"apellido"))} value={TextApellido}/>           
            </div>
           
            
            <div className="mb-3"> 
            <label htmlFor="Email">Email:</label>
            <input type="text" className="form-control" name="email" id="email" onChange={(e)=>(guardarDatos(e,"email"))} value={TextEmail}/>
            </div>
            
            
            <button onClick={(e)=>cargarUsuario(e)} className="btn btn-primary">Cargar Usuario</button>
            <button type="button" onClick={(e)=>Mostrar(e)} className="btn btn-primary">Mostrar usuarios</button>
           

                

                 {mostrar && (
            <>
              {Usuarios.length > 0 && (
                <>
                  <h3 className="mb-5 mt-5">Usuarios cargados</h3>
                  {Usuarios
                    .sort((a, b) => a.apellido.localeCompare(b.apellido))
                    .map(usuario => (
                      <article key={usuario.idMesa}>
                        <h3>{usuario.nombre} - {usuario.apellido} - {usuario.dni} - {usuario.email} </h3>
                      </article>
                    ))}
                </>
              )}
            </>
          )}
         
            
        </div>
    )
} 