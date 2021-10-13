import React, { useState } from 'react'
import styles from './CardOne.module.css'

function Card ({data}){

    const{pro_name, pro_provider, pro_existences, pro_date, pro_description, pro_category} = data

    const [img, setImg] = useState("https://i.ibb.co/86tJFwz/carne.jpg")

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{pro_name}</h2>
            <span className={styles.date}>{pro_date}</span> 
            <h3 className={styles.cantd}>{pro_existences}</h3>
            <img className={styles.img} alt="Img the Products" src={img}/>
            <div className={styles.containerDetails}>
                <div className={styles.providerContainer}>
                    <h2 className={styles.providerTxt}>Proveedor</h2>
                    <h2 className={styles.provider}>{pro_provider} </h2>
                </div>
                <div className={styles.categoryContainer}>
                    <h2 className={styles.categoryTxt}>Categoria</h2>
                    <h2 className={styles.category}>{pro_category} </h2>
                </div>
            </div>
            <div className={styles.descripcion}>
                <p className={styles.sentence}>{pro_description}</p>
            </div>
        </div>

        
    )
}

export default Card
