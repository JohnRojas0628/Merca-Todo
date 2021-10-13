import React from 'react'
import styles from './Stock.module.css';
import Logo from '../../assets/Logo Merca Todo.png';
import Cesta from '../../assets/cesta.png';
import Filtro from '../../assets/Filtro.png';
import Card from './CardOne/CardOne';


const Stock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heder}>

                <img src={Logo} alt="Logo" className={styles.Logo}/> 
                <input type="search" placeholder="Buscar producto" className={styles.input}/>
                <img src={Filtro} alt="Filtro" className={styles.Filtro}/>

            </div>

            <h1>Hola desde Componente Stock</h1>
            <div className={styles.cont_Cesta}>
            <img src={Cesta} alt="Cesta" className={styles.Cesta}/>
            </div>

            <div>
                <Card/>
            </div>
            
        </div>
    )
}

export default Stock
