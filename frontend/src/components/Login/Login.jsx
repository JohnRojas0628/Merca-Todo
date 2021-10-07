import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.css'
import Logo from '../../assets/Logo Merca Todo.png'
const Login = () => {

    const login = ()=> {

    }




    return (
        <div className={styles.login}>
            <h1>Hola desde Componente Login</h1>
            <img src={Logo} alt="Logo"/>
            <Link to='/stock'><button className={styles.btn} onClick={login()}>Acceder</button></Link>

        </div>
    )
}

export default Login
