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
    const [categoryPro, setCategoryPro] = useState("Todos ") ; 

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
    
      const filterChange = () => {
        const category = categoryPro

        switch (category) {
            case "Todos":
        
              break;
            case "Aseo Personal":
         
              break;
            
            case "Carnicos":
            
              break;

              case "Dulceria":
         
              break;

              case "Embutidos":
         
              break;

              case "Elementos de aseo":
         
              break;

              case "Enlatados":
         
              break;

              case "Frutas":
         
              break;

              case "Granos":
         
              break;

              case "Lacteos":
         
              break;

              case "Licores":
         
              break;


            default:
            
              break;
          }
        if (search === '') {
            setProductsMap(products)
        } else {
          const filter = productsMap.filter(e => e.pro_name.toLowerCase().startsWith(search))
          setProductsMap(filter)
        }
      }

      const Menu = ()=>{
       

        
      }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to={"/"}><img src={Logo} alt="Logo" className={styles.Logo}/></Link>
                <input  className={styles.input}
                    onChange={(e)=> inputChange(e)} 
                    placeholder={"Buscar producto"} 
                    type="search"/>
                    
                <img src={Filtro} alt="Filtro" className={styles.Filtro} onClick={Menu()}/>

                <div className={styles.Menu}>
                           
                    <div onClick={filterChange("Todos")}>Todos</div>
                    <div onClick={filterChange("Aseo Personal")}>Aseo Personal</div>
                    <div onClick={filterChange("Carnicos")}>Carnicos</div>
                    <div onClick={filterChange("Desinfectantes")}>Desinfectantes</div>
                    <div onClick={filterChange("Dulceria")}>Dulceria</div>
                    <div onClick={filterChange("Embutidos")}>Embutidos</div>
                    <div onClick={filterChange("Elementos de aseo")}>Elementos de aseo</div>
                    <div onClick={filterChange("Enlatados")}>Enlatados</div>
                    <div onClick={filterChange("Frutas")}>Frutas</div>
                    <div onClick={filterChange("Todos")}>Granos</div>
                    <div onClick={filterChange("Granos")}>Lacteos</div>
                    <div onClick={filterChange("Licores")}>Licores</div>
                
                </div>

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
