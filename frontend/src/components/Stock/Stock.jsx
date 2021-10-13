import React, { useEffect, useState } from 'react'
import styles from './Stock.module.css';
import Logo from '../../assets/Logo Merca Todo.png';
import Filtro from '../../assets/Filtro.png';
import Card from './CardOne/CardOne';
import * as StockServer from './StockServer'
import { Link } from "react-router-dom";

const Stock = () => {

    const [products, setProducts] = useState([]);
    const [productsMap, setProductsMap] = useState(products);

    const listProducts = async () =>{
        try{
            const res = await StockServer.listProducts();
            const data = await res.json();
            setProducts(data.productos);
            setProductsMap(data.productos);
            console.log(products);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() =>{
        listProducts();
    },[]);

    const inputChange = (e) => {
        const search = e.target.value.toLowerCase().trim()
        if (search === '') {
            setProductsMap(products)
        } else {
          const filter = productsMap.filter(e => e.pro_name.toLowerCase().startsWith(search))
          setProductsMap(filter)
        }
      }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to={"/"}><img src={Logo} alt="Logo" className={styles.Logo}/></Link>
                <input  className={styles.input}
                    onChange={(e)=> inputChange(e)} 
                    placeholder={"Buscar producto"} 
                    type="search"/>
                    
                <img src={Filtro} alt="Filtro" className={styles.Filtro}/>
            </div>
            <div className={styles.products}>
                {productsMap.map(element =>(
                    <Card key={element.id} data={element}/>
                ))}
            </div>            
        </div>
    )
}

export default Stock
