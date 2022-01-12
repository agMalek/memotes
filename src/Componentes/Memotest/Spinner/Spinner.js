import './Spinner.css'

const Spinner = () => {
    return ( 
        <div className='d-flex flex-column align-items-center'>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className='text-white my-4'>Cargando...</h4>
        </div>
 
    );
}
 
export default Spinner;