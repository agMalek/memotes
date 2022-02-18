import './Spinner.css'

const Spinner = () => {
    return ( 
        <div className='contenedorSpinner'>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className='textoSpinner'>Cargando...</h4>
        </div>
 
    );
}
 
export default Spinner;