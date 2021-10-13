import React from 'react';
import Logo from '../../assets/Logo Merca Todo.png'
import styles from './CRUD.module.css'
import agregar from '../../assets/add.svg'

import { Link } from "react-router-dom";
import data from '../../db.json'
import { useEffect, useState } from 'react';
import { deleteprod } from './marketserver';
import * as MarketServer from './marketserver'

const CRUD = () => {

  /* const [users, setUsers] = useState([]) 

  useEffect(() =>{
  listprod()
 //eslint-disable-next-line
  },
   [])
 
  const listprod = async ()=> {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await response.json()
   setUsers(data)}
 
   const deleteprod = async(id)=> {
     await MarketServer.deleteprod (id);
     listprod();
    } 
  */


  return (

    <div className={styles.Crud}>
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
          {data.map((user, index) =>
            <tr key={index}>
              <th>{user.id}</th>
              <th>{user.producto}</th>
              <th>{user.proveedor}</th>
              <th>{user.existencias}</th>
              <th>{user.descripcion}</th>
              <th>{user.categoria}</th>
              <th>{user.Fecha}</th>
              <td><button className="button">Editar</button>
                <button onClick={user.id} className="button">Eliminar</button></td>

            </tr>
          )}

        </tbody>
      </table>
    </div>



  )
}


export default CRUD