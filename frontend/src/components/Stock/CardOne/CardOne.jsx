import React from 'react'
import Styles from './CardOne.module.css'

function Card (){

    const carta=
     {
        "nombre"           :"carne de res",
        "cantidad"         :15,
        "fecha"            : 2021-10-12,
        "provedor"         :"carnes gausa",
        "Categoria"        :" carnes",
        "descripcion"      :"La carne de res (Bos taurus) es la carne procedente de un animal no menor a 3 años de edad y que pese 500 kg. antes de su sacrificio, la carn.",
        "imagen"           :"https://drive.google.com/file/d/1UbaG9_RQMHz-dCPgEy5fZSvRCWVBVmjg/view?usp=sharing",
     }

    return (
        <div>

            <div className={Styles.contCard}>

                <div>

                    <h3>Nombre : {carta.nombre}</h3> 

                    <h3>Fecha : {carta.fecha } </h3>
                    
                </div>

                <div>
                    <h3>{carta.cantidad}</h3>
                </div>

            </div>

            <div>
                <img src={carta.imagen} alt="Canes" />
            </div>

            <div>
                <h3>Provedor : {carta.provedor}</h3>
                <h3>Categoria : {carta.Categoria}</h3>
               
            </div>

            <div>
                <h2>
                    Descripcion

                </h2>

                <p>
                {carta.descripcion }
                </p>
            </div>

        </div>
    )
}

export default Card
