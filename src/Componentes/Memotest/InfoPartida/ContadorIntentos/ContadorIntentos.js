import './ContadorIntentos.css'


const ContadorIntentos = ({contadorIntentos, setContadorIntentos}) => {
    return (  
        <div className='contenedorTectoCantInt'>
            <p className='textoCantInt'>{contadorIntentos} intentos</p>
        </div>
    );
}
 
export default ContadorIntentos;