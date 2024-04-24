import Head from 'next/head';
import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

//import "bootstrap/dist/js/bootstrap.bundle.min.js";



import { useState,useEffect } from 'react';


export default function Home() {

 
    
    const[textDni,setTextDni] = useState(Number);

    
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
        <nav className={styles.nav}>
            <img className={styles.logoMunicipalidad} src="\logoMunicipalidadBlanco.png" alt="logoMunicipalidad" id="logoMunicipalidad"/>
            <h1 className={styles.titulo}>Órdenes de ingreso</h1>
            
            <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-expanded="false">
          Dropdown button
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
        <button className={`m-3 ${styles.botones}`}>Nuevo tramite</button>
        <button className={`${styles.botones}`}>Mis tramites</button>
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
            <div className="p-1 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.1
              </label>
            </div>
            <div className="p-1 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckChecked">
                A 1.2
              </label>
            </div>
            <div className=" p-1 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.3
              </label>
            </div>
            <div className=" p-1 form-check-inline">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="ms-2 form-check-label" htmlFor="flexCheckDefault" >
                A 1.4
              </label>
            </div>
            <div className=" p-2 form-check-inline">
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
            <div id="calendar" className="calendario fc fc-ltr fc-bootstrap">
              <div className="fc-toolbar fc-header-toolbar">
                <div className="fc-left"><h2>abril de 2024</h2></div>
                <div className="fc-center"></div>
                <div className="fc-right">
                  <div className="btn-group">
                    <button type="button" className="fc-prev-button btn btn-primary" aria-label="prev"  disabled>
                      <span className="fa fa-chevron-left"></span>
                    </button>
                    <button type="button" className="fc-next-button btn btn-primary" aria-label="next">
                      <span className="fa fa-chevron-right"></span>
                    </button></div></div></div><div className="fc-view-container">
                  <div className="fc-view fc-dayGridMonth-view fc-dayGrid-view" >
                    <table className="table-bordered"><thead className="fc-head">
                      <tr><td className="fc-head-container "><div className="fc-row table-bordered" style={{ borderRightWidth: '1px', marginRight: '16px' }}>
                        <table className="table-bordered">
                          <thead>
                            <tr><th className="fc-day-header  fc-mon">lun</th>
                            <th className="fc-day-header  fc-tue">mar</th>
                            <th className="fc-day-header  fc-wed">mié</th>
                            <th className="fc-day-header  fc-thu">jue</th>
                            <th className="fc-day-header  fc-fri">vie</th>
                            <th className="fc-day-header  fc-sat">sáb</th>
                            <th className="fc-day-header  fc-sun">dom</th>
                            </tr>
                          </thead>
                          </table>
                          </div>
                        </td>
                        </tr>
                        </thead>
                        <tbody className="fc-body">
                          <tr><td className="">
                            <div className="fc-scroller fc-day-grid-container" style={{overflow: 'hidden scroll', height:'269.5px'}}/*style="overflow: hidden scroll; height: 269.5px;"*/>
                              <div className="fc-day-grid">
                                <div className="fc-row fc-week table-bordered">
                                  <div className="fc-bg">
                                    <table className="table-bordered">
                                      <tbody>
                                        <tr>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                          <td className="fc-day  fc-disabled-day"></td>
                                        </tr>
                                        </tbody>
                                        </table>
                                        </div>
                                      <div className="fc-content-skeleton">
                                        <table>
                                          <thead>
                                            <tr>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                            </tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div>
                                        <div className="fc-row fc-week table-bordered"><div className="fc-bg"><table className="table-bordered"><tbody><tr><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div className="fc-row fc-week table-bordered"><div className="fc-bg"><table className="table-bordered"><tbody><tr><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div className="fc-row fc-week table-bordered"><div className="fc-bg"><table className="table-bordered"><tbody><tr><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-thu fc-future" data-date="2024-04-25"></td><td className="fc-day  fc-fri fc-future" data-date="2024-04-26"></td><td className="fc-day  fc-sat fc-future" data-date="2024-04-27"></td><td className="fc-day  fc-sun fc-future" data-date="2024-04-28"></td></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td></td><td></td><td></td><td className="fc-day-top fc-thu fc-future" data-date="2024-04-25"><span className="fc-day-number">25</span></td><td className="fc-day-top fc-fri fc-future" data-date="2024-04-26"><span className="fc-day-number">26</span></td><td className="fc-day-top fc-sat fc-future" data-date="2024-04-27"><span className="fc-day-number">27</span></td><td className="fc-day-top fc-sun fc-future" data-date="2024-04-28"><span className="fc-day-number">28</span></td></tr></thead><tbody><tr><td></td><td></td><td></td><td className="fc-event-container"><a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end" style={{backgroundColor:'#00a7b7',borderColor:'#00a7b7'}}><div className="fc-content"> <span className="fc-title">Disp.</span></div></a></td><td></td><td></td><td></td></tr></tbody></table></div><div className="fc-bgevent-skeleton"><table><tbody><tr><td style={{pointerEvents:'none'}}></td><td style={{pointerEvents:'none'}}></td><td style={{pointerEvents:'none'}}></td><td style={{pointerEvents:'none'}}></td><td style={{pointerEvents:'none'}}></td><td className="fc-nonbusiness fc-bgevent" colSpan={2}></td></tr></tbody></table></div></div><div className="fc-row fc-week table-bordered"><div className="fc-bg"><table className="table-bordered"><tbody><tr><td className="fc-day  fc-mon fc-future" data-date="2024-04-29"></td><td className="fc-day  fc-tue fc-future" data-date="2024-04-30"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-mon fc-future" data-date="2024-04-29"><span className="fc-day-number">29</span></td><td className="fc-day-top fc-tue fc-future" data-date="2024-04-30"><span className="fc-day-number">30</span></td><td></td><td></td><td></td><td></td><td></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div className="fc-row fc-week table-bordered"><div className="fc-bg"><table className="table-bordered"><tbody><tr><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td><td className="fc-day  fc-disabled-day"></td></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div></div></div></td></tr></tbody></table></div></div></div>
            
            </div>
            <div className='mt-4 bg-primary col-3'>
            asa
            </div>
          </div>
        
       
        
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
        </div>
        
      </main>

      <footer className={styles.footer}>
        <h6>© Municipalidad de Paraná - Dirección General de Sistemas y Telecomunicaciones - 0.7.6</h6>
      </footer>

    </div>
    
  );
}
