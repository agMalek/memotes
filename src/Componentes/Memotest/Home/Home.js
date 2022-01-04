import Titulo from "../Titulo/Titulo";

const Home = ({setInicioJuego}) => {

    return (  
        <div className='d-flex align-items-center'>
            <div className='mx-4'>    
                <Titulo/> 
            </div>
            <button className='btn btn-outline-primary boton' onClick={() => setInicioJuego(true)}>EMPEZAR JUEGO</button>
        </div>
    );
}
 
export default Home;