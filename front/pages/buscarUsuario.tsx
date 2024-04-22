import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";

const host="http://localhost:3000";

export default function BuscarUsuarios(){

    const[usuarioBuscado,setUsuarioBuscado] = useState([]);
    const[textDni,setTextDni] = useState();
    const [mostrar,setMostrar] = useState(false);

    function Mostrar(e){
      e.preventDefault();
      setMostrar(!mostrar)
  }



    function buscarUsuario(e,dni){
        
        fetch(host+`/usuario/${dni}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          Mostrar(e);
          return response.json();
          
        } else {
          throw new Error(`Error - Código: ${response.status}`);
        }
      })
      .then(data => {
        console.log("Datos del usuario:", data);
        setUsuarioBuscado(data);
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
        setUsuarioBuscado([])
      });
      }

      function UsuarioBuscado(e){
        e.preventDefault();
        setTextDni(e.target.value);
      }



    return(
        <div >
            <h1>Buscar Usuario</h1>
            <div className="mb-3">
            <label htmlFor="Dni" className="form-label">Dni:</label>
            <input type="number" className="form-control" name="Dni" id="Dni" onChange={(e)=>(UsuarioBuscado(e))} value={textDni}/>
            </div>
            
            
            <button onClick={(e)=>buscarUsuario(e,textDni)} className="btn btn-primary">Cargar Usuario</button>

           

            {mostrar && (
            <>
              {usuarioBuscado.length >= 0 && (
                <>
                  <h3 className="mb-5 mt-5">Usuarios cargados</h3>
                  {usuarioBuscado
                    .sort((a, b) => a.apellido.localeCompare(b.apellido))
                    .map(usuario => (
                    
                        <h3>{usuario.nombre} - {usuario.apellido} - {usuario.dni} - {usuario.email} </h3>
                      
                    ))}
                </>
              )}
            </>
          )}
        </div>
    )
}