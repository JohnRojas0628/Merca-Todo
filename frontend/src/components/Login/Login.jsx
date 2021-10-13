import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Logo from '../../assets/Logo Merca Todo.png';
import User from '../../assets/ei_user.png';
import Password from '../../assets/Vector.png';
import Cesta from '../../assets/cesta.png';
import Cerezas from '../../assets/Cerezas.png'
import * as UsersServer from './UsersServer.js'


const Login = () => {

    const [router, setRouter] = useState("/");
    const [users, setUser] = useState([]);


    const listUsers = async () =>{
        try{
            const res = await UsersServer.listUsers();
            const data = await res.json();
            setUser(data.usuarios);
            console.log(users);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() =>{
        listUsers();
    },[users]);

    const inputChange = (e) => {
        const user = e.target.value;

        if(user === ""){
            console.log("Campo Usuario vacio")
        }else{
            if(users[0].username === user){
                setRouter("/crud")
            }
            else if (users[1].username === user){
                setRouter("/stock")
            }else{
                setRouter("/")
            }
        }
    }


    // const expresiones = {
	// 	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	// 	password: /^.{4,12}$/, // 4 a 12 digitos.
	// }

    const onSubmit = (e) => {
		e.preventDefault();
    }

    return (
        <div className={styles.login}>
            <img className={styles.logo} src={Logo} alt="Logo"/>
            <h1 className={styles.welcome}>Bienvenidos a tu <br/>Mercado Favorito</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.register}>Registrarse</label>
                <input 
                    type="text" 
                    className={styles.user} 
                    name="user" 
                    placeholder="Usuario" 
                    onChange={(e)=> inputChange(e)} 
                    required
                />
                <label className={styles.labelUser}><img className={styles.imgUser} src={User} alt="ico"/></label>
                <input 
                    type="password" 
                    className={styles.password} 
                    name="login" 
                    placeholder="Contraseña" 
                    required
                />
                <label className={styles.labelPass}><img className={styles.imgPass} src={Password} alt="ico"/></label>
                <Link to={router}><button className={styles.btn} >Acceder</button></Link>
            </form>
            <img className={styles.cesta} src={Cesta} alt="cesta"/>
            <img className={styles.cerezas} src={Cerezas} alt="cerezas"/>
        </div>
    )
}

export default Login
