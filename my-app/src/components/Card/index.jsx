import React from "react";

export default function Card ({mostrar, texto, textoLink}){
    
    return(
        
        <section>
            <div>
                <div><p>{texto}</p></div>
                {mostrar &&(
                <div><a href={textoLink}><p>{textoLink}</p></a></div>
                )}
            </div>
        </section>
        )
    }