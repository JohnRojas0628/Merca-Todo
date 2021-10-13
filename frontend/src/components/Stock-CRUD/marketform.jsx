import Logo from '../../assets/Logo Merca Todo.png'
import React from 'react'
import styles from './CRUD.module.css'
import cesta from '../../assets/cesta.png'
import cerrar from '../../assets/cerrar.png'
import * as MarketServer from "./marketserver";
import { useHistory } from "react-router-dom";
import { useState } from "react";


const MarketForm = () => {

  const history = useHistory();


  const initialState = { id: 0, pro_name: "", pro_provider: "", pro_existences: 0, pro_date: 0, pro_description: "", pro_category: "" };

  const [users, setUsers] = useState(initialState);

  const handleInputChange = (e) => {

    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users)
    try {
      let res;
      res = await MarketServer.registerProduct(users);
      const data = await res.json();
      if (data.message === "Success") {
        setUsers(initialState);
      }
      history.push("/crud");

    }
    catch (error) {
      console.log(error);
    }
  };






  return (
    <div className={styles.log}>
      <div className={styles.containercerrar}>
        <img className={styles.cerrar} src={cerrar} alt="cerrar" />
      </div>
      <img className={styles.logom} src={Logo} alt="Logo" />

      <form className={styles.formu} onSubmit={handleSubmit} >

        <input className={styles.users}
          type="text"
          label="Producto"
          placeholder="Producto"
          name="pro_name"
          value={users.pro_name} onChange={handleInputChange}
        />

        <input className={styles.users}
          type="texto"
          label="Proveedor"
          placeholder="Proveedor"
          name="pro_provider"
          value={users.pro_provider} onChange={handleInputChange}
        />

        <input className={styles.users}
          type="number"
          label="Existences"
          placeholder="Existences"
          name="pro_existences"
          value={users.pro_existences} onChange={handleInputChange}
        />

        <input className={styles.users}
          type="date"
          label="Fecha de llegada"
          placeholder="Fecha de llegada"
          name="pro_date"
          value={users.pro_date} onChange={handleInputChange}
        />
        <input className={styles.users}
          type="text"
          label="Descripcion"
          placeholder="Descripcion"
          name="pro_description"
          value={users.pro_description} onChange={handleInputChange}
        />

        <input className={styles.users}
          type="text"
          label="Categoria"
          placeholder="Categoria"
          name="pro_category"
          value={users.pro_category} onChange={handleInputChange}
        />

        <button className={styles.adds}>Agregar</button>



      </form>
      <img className={styles.cesta} src={cesta} alt="cesta" />

    </div>
  )


}

export default MarketForm;

