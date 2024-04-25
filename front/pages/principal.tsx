import Head from 'next/head';
import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




import { useState,useEffect } from 'react';


export default function Home() {

 
    
    const[textDni,setTextDni] = useState(Number);

    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    
      useEffect(() => {
        // Aquí puedes ejecutar tu función
        valoresPreSeteados();
      }, []);

    function valoresPreSeteados(){
        setTextDni(38054313);
    }

  return (
    
    <div className={styles.body}>
      <Head>
        <title>Solicitar turno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.body}>
        <nav className={`p-2 ${styles.nav}`}>
            <img className={`ms-5 ${styles.logoMunicipalidad}`} src="\logoMunicipalidadBlanco.png" alt="logoMunicipalidad" id="logoMunicipalidad"/>
            <h1 className={styles.titulo}>Registro de Conducir</h1>
            
            <div>
              
            </div>
        <div className={`dropdown ${styles.botones} me-5`}>
          <button className={`btn dropdown-toggle ${styles.botones}`} type="button" id="dropdownMenuButton" aria-expanded="false">
          Nombre de Usuario
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          </ul>
         </div>


            
        </nav>
        <div className={styles.lineaAzul}>
                
        </div>
        <br />
        
        <div className='container-lg '>
        <button className={`m-3 ${styles.botones} ${styles.contenidoBotones}`}>Nuevo tramite</button>
        <button className={`${styles.botones} ${styles.contenidoBotones}`}>Mis tramites</button>
          <div className='row'>
            <div className='mt-4 col-12'>
            <div className=" card">
        <div className="card-header">
        Informacion
        </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
            Sr./Sra. <strong> ACA Colocar nombre y apellido del Usuario </strong>: <br />
            Según nuestros datos, tiene un registro que vence el <strong> aca colocar vencimiento carnet</strong> y posee la/s clase/s: <br />
            <strong> aca colocar categorias carnet</strong> <br />
            <strong> aca colocar si el usuario posee multas, en el caso de tenerlas que lo redirija para solucionarla</strong><br />

            Si usted necesita descargar el certificado de libre deuda, haga clic <a href="">aquí</a>. <br />

            Para solicitar el turno, haga clic <a href="">aquí</a>.
             
            </blockquote>
          </div>
          
        </div>
            </div>
            <div className='mt-4 col-6'>
            <select className="form-select" aria-label="Default select example">
              <option selected>Seleccione tipo de tramite</option>
              <option value="1">Nueva Licencia</option>
              <option value="2">Renovacion</option>
              <option value="3">Duplicado</option>
              <option value="4">Cambio de categoria</option>
            </select>
            </div>
            <div className='mt-4 col-6'>
            <div>
            <div className="ps-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.1
              </label>
            </div>
            <div className="ps-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckChecked">
                A 1.2
              </label>
            </div>
            <div className="ps-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.3
              </label>
            </div>
            <div className="ps-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.4
              </label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 2.1
              </label>
            </div>
            <div className=" p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 2.2
              </label>
            </div>
            <div className=" p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 3
              </label>
            </div>
            </div>
            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                B 1
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckChecked">
                B 2
              </label>
            </div>
           
            </div>
            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                C 1
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                C 2
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                C 3
              </label>
            </div>
            </div>

            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                D 1
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                D 2
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                D 3
              </label>
            </div>
            
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                D 4
              </label>
            </div>
            </div>
            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                E 1
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                E 2
              </label>
            </div>
            </div>
            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                F
              </label>
            </div>
            </div>
            <div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                G 1
              </label>
            </div>
            <div className="p-2 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                G 2
              </label>
            </div>
            </div>
            </div>


            
            <div className='mt-4 col-6'>
            <select className="form-select" aria-label="Default select example">
              <option selected>Seleccione sellado</option>
              <option value="1">Nueva Licencia</option>
              <option value="2">Renovacion</option>
              <option value="3">Duplicado</option>
              <option value="4">Cambio de categoria</option>
            </select>
            </div>
            <div className='mt-4 col-3'>
           <span>Colocar calendario</span>
            </div>
            <div className='mt-4 col-3'>
            <span>Colocar horario turno</span>
            </div>
            <div className='mt-4 col-6'>
            <div className="input-group mt-5 mb-3">
              <input type="file" className="form-control" id="inputGroupFile02"/>
              <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
            </div>
            <div className="input-group mt-5 mb-3">
              <input type="file" className="form-control" id="inputGroupFile02"/>
              <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
            </div>

            </div>
          </div>
        
       
        
        
        </div>
        
      </main>

      <footer className={`mt-5 ${styles.footer}`}>
        <h6>© Municipalidad de Paraná - Dirección General de Sistemas y Telecomunicaciones - 0.7.6</h6>
      </footer>

    </div>
    
  );
}
