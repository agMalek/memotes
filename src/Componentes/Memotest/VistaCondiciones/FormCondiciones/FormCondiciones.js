
import './FormCondiciones.css'

const FormCondiciones = (props) => {
    const {setNivel, iniciarJuego} = props
    return ( 
        <form className='contenedorCondiciones' onSubmit={(SyntheticEvent) => iniciarJuego(SyntheticEvent)}>
            <div className='contenedorDificultad '>
                <div className='mx-3'>
                    <label className='labelDificultad' htmlFor="Easy">Easy</label>
                    <input className='inputDificultad' type="radio" id="Easy" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Medium">Medium</label>
                    <input className='inputDificultad' type="radio" id="Medium" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
                <div  className='mx-3'>
                    <label className='labelDificultad' htmlFor="Hard">Hard</label>
                    <input className='inputDificultad' type="radio" id="Hard" onChange={(SyntheticEvent)=>setNivel(SyntheticEvent.target.id)} name='dificultad'/>
                </div>
            </div>
            <div className='contenedorTemas'>  
                <select className='selectTema'>
                    <option value="Banderas">Banderas</option>
                    <option value="Animales">Animales</option>
                    <option value="Comidas">Comidas</option>
                </select>
            </div>
            <div>
                <button className='btn btn-outline-primary my-4 w-100'>Iniciar</button>
            </div>
        </form>
     );
}
 
export default FormCondiciones;