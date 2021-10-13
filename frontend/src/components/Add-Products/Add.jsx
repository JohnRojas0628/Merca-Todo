import React from 'react' 
import styles from './Add.module.css' 
import Logo from '../../assets/Logo Merca Todo.png' 
import cesta from '../../assets/cesta.png' 
import cerrar from '../../assets/cerrar.png' 
 
const Add = () => { 
    return ( 
        <div className={styles.log}> 
            <div className={styles.containercerrar}> 
                <img className={styles.cerrar} src={cerrar} alt="cerrar"/> 
            </div> 
            <img className={styles.logom} src={Logo} alt="Logo"/> 
             
            <form className={styles.formu} > 
         
                <input className={styles.users} 
                    type="text" 
                    label="Producto" 
                    placeholder="Producto" 
                    name="Producto" 
                /> 
 
                <input className={styles.users} 
                    type="texto" 
                    label="Proveedor" 
                    placeholder="Proveedor" 
                    name="Proveedor" 
                /> 
 
                <input className={styles.users} 
                    type="number" 
                    label="Existences" 
                    placeholder="Existences" 
                    name="Existences" 
                /> 
 
                <input className={styles.users} 
                    type="date" 
                    label="Fecha de llegada" 
                    placeholder="Fecha de llegada" 
                    name="fecha" 
                /> 
                 <input className={styles.users} 
                    type="text" 
                    label="Descripcion" 
                    placeholder="Descripcion" 
                    name="descripcion" 
                /> 
                 
                <input className={styles.users} 
                    type="text" 
                    label="Categoria" 
                    placeholder="Categoria" 
                    name="categoria" 
                /> 
 
                <button className={styles.boton}>Agregar</button> 
                
                 
                 
            </form> 
            <img className={styles.cesta} src={cesta} alt="cesta"/> 
            
        </div> 
    ) 
} 
 
export default Add