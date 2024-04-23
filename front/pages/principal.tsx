import Head from 'next/head';
import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Home.module.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from 'react';


export default function Home() {
    
    const[textDni,setTextDni] = useState(Number);


    function valoresPreSeteados(){
        setTextDni(38054313);
    }

  return (
    
    <div className={styles.body}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.body}>
        <nav className={styles.nav}>

            <h1 className={styles.titulo}>Órdenes de ingreso</h1>
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nombre del usuario
            </button>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item text-center fs-5" href="#">Salir</a></li>
            </ul>
            </div>
            <div className={styles.lineaAzul}>
                
            </div>
        </nav>
        <div className="alert alert-secondary alert-dismissible fade show m-5" role="alert">
        Sr./Sra. <strong> ACA Colocar nombre y apellido del Usuario </strong>: <br />
            Según nuestros datos, tiene un registro que vence el <strong> aca colocar vencimiento carnet</strong> y posee la/s clase/s: <br />
            <strong> aca colocar categorias carnet</strong> <br />
            <strong> aca colocar si el usuario posee multas, en el caso de tenerlas que lo redirija para solucionarla</strong><br />

            Si usted necesita descargar el certificado de libre deuda, haga clic <a href="">aquí</a>. <br />

            Para solicitar el turno, haga clic <a href="">aquí</a>.

        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
          
        <button>+ Agregar</button>
        <div className={styles.sellados}><h2 color='#0070f3'>Sellados - {textDni}</h2></div>
            
        El usuario puede redirigirse, con autologin, desde Mi Pna hacia el nuevo sistema del registro.
        El sistema debe informarle:
        Datos de la licencia actual: Clases, fecha de vencimiento.
        Si tiene multas o no.
        Iniciar un nuevo tramite:
        Solo mostrarles los tramite que puede realizar según edad y/o clases q tiene
        Pagar sellado.
        Redirigir al formulario del CENAT.
        Solicitar turno para ir al registro
        Si tiene celular registrado, enviarle por Muni información del turno solicitado y un numero de gestión.
      </main>

      <footer className={styles.footer}>
        <h6>foot</h6>
      </footer>

    </div>
  );
}
