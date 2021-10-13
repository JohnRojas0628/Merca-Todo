import React, { useState } from 'react' 
import styles from './Add.module.css' 
import Logo from '../../assets/Logo Merca Todo.png' 
import cesta from '../../assets/cesta.png' 
import cerrar from '../../assets/cerrar.png' 
import *as Addserver from './AddServer'
import {useHistory} from 'react-router'
import { Link } from "react-router-dom";

const Add = () => { 
    const history=useHistory();
    const initialState={id:0, pro_name:'', pro_provider:"",pro_existences:0,pro_date:"2012-01-01",pro_description:"",pro_category:""}
    const [posts, setpost]=useState(initialState)

    const handleInputChange=(e)=>{

       console.log(e.target.name)
       console.log(e.target.value)
       setpost({...posts,[e.target.name]:e.target.value});
    };

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(posts)
        try{
        let res;
            res= await Addserver.listproducts(posts)
            const data=await res.json();
            console.log(data)
            if(data.message==="success"){
                setpost(initialState)
            }
            history.push('/crud')
        }catch(error){
            console.log(error)
        }
        
    }

    return ( 
        <div className={styles.log}> 
            <div className={styles.containercerrar}> 
            <Link to={"/crud"}><button className={styles.bcerrar}><img className={styles.cerrar} src={cerrar} alt="cerrar"/> </button></Link>
                
            </div> 
           
            <img className={styles.logom} src={Logo} alt="Logo"/> 
             
            <form onSubmit={handleSubmit} className={styles.formu}  > 
         
                <input className={styles.users} 
                    type="text" 
                    label="Producto" 
                    placeholder="producto"
                    name="pro_name" 
                    value={posts.pro_name}
                    onChange={handleInputChange}
                /> 
 
                <input className={styles.users} 
                    type="texto" 
                    label="Proveedor" 
                    placeholder="Proveedor" 
                    name="pro_provider" 
                    value={posts.pro_provider}
                    onChange={handleInputChange}
                /> 
 
                <input className={styles.users} 
                    type="number" 
                    label="Existences" 
                    placeholder="Existences" 
                    name="pro_existences" 
                    value={posts.pro_existences}
                    onChange={handleInputChange}
                /> 
 
                <input className={styles.users} 
                    type="date" 
                    label="Fecha de llegada" 
                    placeholder="Fecha de llegada" 
                    name="pro_date" 
                    value={posts.pro_date}
                    onChange={handleInputChange}
                /> 
                 <input className={styles.users} 
                    type="text" 
                    label="Descripcion" 
                    placeholder="Descripcion" 
                    name="pro_description" 
                    value={posts.pro_description}
                    onChange={handleInputChange}
                /> 
                 
                <input className={styles.users} 
                    type="text" 
                    label="Categoria" 
                    placeholder="Categoria" 
                    name="pro_category" 
                    value={posts.pro_category}
                    onChange={handleInputChange}
                /> 
 
                <button className={styles.boton}>Agregar</button> 
                
                 
                 
            </form> 
            <img className={styles.cesta} src={cesta} alt="cesta"/> 
            
        </div> 
    ) 
} 
 
export default Add