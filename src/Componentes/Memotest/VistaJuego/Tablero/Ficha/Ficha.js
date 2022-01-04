
import { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getPodesJugar, getVolteadas,  setPrimeraVolteada, setSegundaVolteada, setPodesJugar} from '../../../../../app/slice/enJuegoSlice'

import './Ficha.css'

const Ficha = (props) => {
    const {ficha, opacidad, darVuelta} = props

    /* const dispatch = useDispatch() */

    /* const podesJugar = useSelector(getPodesJugar)
    const {primeraVolteada} = useSelector(getVolteadas) */

    const opaca = "opaca"
    const transparente = "transparente"
    const descubierta =  "descubierta"


    /*  --------- MUESTRA LA IMAGEN DE LA FICHA, Y LA GUARDA PARA DESPUES COMPARARLA ----------- */
    /* cuando haga click en la ficha */
    /* const darVuelta = (event) =>{
        console.log("se ejecuta")
        if(podesJugar){
            let img = event.target.querySelector('img')
            if(img !== null && img.className !== opaca && img.className !== descubierta){
                if(primeraVolteada === undefined){
                    dispatch(setPrimeraVolteada(img))
                }else{
                    dispatch(setSegundaVolteada(img))
                    dispatch(setPodesJugar(false))
                }
                img.className = opaca
                
            }
        }else{
            console.log("paso por el else")
        }
    } */

    /* useEffect(() =>{
        console.log(primeraVolteada)
    },[primeraVolteada]) */

    

    return ( 
        <div className='ficha' onClick={(SyntheticEvent) => darVuelta(SyntheticEvent)} >
            <img className={opacidad} id="imgFicha" src={ficha.src} alt={ficha.alt} />
        </div>
    );
}
 
export default Ficha;