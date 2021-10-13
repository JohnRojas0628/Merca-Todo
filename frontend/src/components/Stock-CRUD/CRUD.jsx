import React from 'react';
import Logo from '../../assets/Logo Merca Todo.png'
import styles from './CRUD.module.css'
import agregar from '../../assets/add.svg'

import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import * as MarketServer from "./MarketServer";
import { useHistory, useParams } from "react-router";

const CRUD = () => {
  const history = useHistory()


  const [users, setUsers] = useState([]);

  const listProduct = async () => {
    try {
      const res = await MarketServer.listProduct();
      const data = await res.json();
      setUsers(data.productos);
      console.log(data.productos)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listProduct();
  }, []);

  const handleDelete = async (productosId) => {
    await MarketServer.deleteProduct(productosId);
    listProduct();
  };





  return (

    <div className="Crud">
      <div className="crud1">
        <img className={styles.logo1} src={Logo} alt="logo" />
        <img className={styles.agregar} src={agregar} alt="logo" />


      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Proveedor</th>
            <th>Exitencias</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Fecha de llegada</th>
          </tr>
        </thead>
        <tbody>

          {users.map((producto, index) =>
            <tr key={index}>
              <th>{producto.id}</th>
              <th>{producto.pro_name}</th>
              <th>{producto.pro_provider}</th>
              <th>{producto.pro_existences}</th>
              <th>{producto.pro_date}</th>
              <th>{producto.pro_description}</th>
              <th>{producto.pro_category}</th>
              <td>
                <button onClick={() => history.push(`/updateProduct/${producto.id}`)} className="update">
                  Update
                </button>


                <button onClick={() => producto.id && handleDelete(producto.id)} className="delete">Eliminar</button></td>

            </tr>
          )}

        </tbody>
      </table>
    </div>



  )
}


export default CRUD