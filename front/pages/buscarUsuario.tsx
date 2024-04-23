import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Home.module.css';

const host="http://localhost:3000";

export default function BuscarUsuarios(){

    const[usuarioBuscado,setUsuarioBuscado] = useState([]);
    const[textDni,setTextDni] = useState();
    const [mostrar,setMostrar] = useState(false);
    let nombre:string;

    function Mostrar(e){
      e.preventDefault();
      setMostrar(!mostrar)
      console.log(usuarioBuscado)

  }


  useEffect(()=>{
    fetch(host+'/usuario')
    .then(res => res.json())
    .then(res => setUsuarioBuscado(res))
    .catch(error => console.error('Error fetching mesas:', error));
}, []);


    function buscarUsuario(e,dni){
        e.preventDefault();
        fetch(host+`/usuario/${dni}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
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
      });
      }

      function UsuarioBuscado(e){
        e.preventDefault();
        setTextDni(e.target.value);
      }



    return(
        <div id="formulario">
            <h1>Buscar Usuario</h1>
            <div className="mb-3">
            <label htmlFor="Dni" className="form-label">Dni:</label>
            <input type="number" className="form-control" name="Dni" id="Dni" onChange={(e)=>(UsuarioBuscado(e))} value={textDni}/>
            </div>
            
            
            <button onClick={(e)=>buscarUsuario(e,textDni)} className="btn btn-primary">Buscar</button>
            <button onClick={(e)=>Mostrar(e)} className="btn btn-primary">Buscar</button>

            
            {mostrar && (
            <>
              
                  <h3 className="mb-5 mt-5">Usuarios cargados</h3>
                  {usuarioBuscado
                    .sort((a, b) => a.apellido.localeCompare(b.apellido))
                    .map(usuario => (
                      <article key={usuario.id}>
                        <h3>{usuario.nombre} - {usuario.apellido} - {usuario.dni} - {usuario.email} </h3>
                      </article>
                    ))}
                </>
              )}
            
          

        </div>
    )
}