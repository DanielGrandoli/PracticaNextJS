export default function about() {
    return(
        <div>
            <form action="">
            <label htmlFor="Nombre">Nombre:</label>
            <input type="text" name="nombre" />
           
            <br></br>
            <label htmlFor="Apellido">Apellido:</label>
            <input type="text" name="apellido" />
            
            <br></br>
            <label htmlFor="Direccion">Direccion:</label>
            <input type="text" name="direccion" />
            <br />
            <input type="submit" value="Guardar" />
        
            </form>
        </div>
    )
} 