import React from "react";
import {Layout} from './layout'

const Easy = ({}) => {

    const mostrar = () => {
        console.log("Easy")
    }

    return(
        <Layout 
            mostrar = { mostrar }
        
        />
    )

}

export default Easy