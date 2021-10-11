import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Logo from '../../assets/Logo Merca Todo.png';
import User from '../../assets/ei_user.png';
import Password from '../../assets/Vector.png';
import Cesta from '../../assets/cesta.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Input } from './Input/Input';

const Login = () => {

    const [user, setUser] = useState({campo: '', valido: null});
    const [password, setPassword] = useState({campo: '', valido: null});
    const [router, setRouter] = useState("/stock")
    
    // const 

    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		password: /^.{4,12}$/, // 4 a 12 digitos.
	}

    const onSubmit = (e) => {
		e.preventDefault();

		if(
			user.valido === 'true' &&
            password.valido === 'true'
        ){
			setUser({campo: '', valido: ''});
			setPassword({campo: '', valido: null});
            login()
        } else {
			alert("Complete los 2 campos")
		}
    }

    const login = ()=> {


    }

    

    return (
        <div className={styles.login}>
            <img className={styles.logo} src={Logo} alt="Logo"/>
            <h1 className={styles.welcome}>Bienvenidos a tu <br/>Mercado Favorito</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.register}>Registrarse</label>
                <Input className={styles.user}
                    estado={user}
                    cambiarEstado={setUser}
                    tipo="text"
                    label="Usuario"
                    placeholder="Usuario"
                    name="usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener letras y guion bajo."
                    expresionRegular={expresiones.usuario}
                />
                {/* <input type="text" className={styles.user} name="user" placeholder="Usuario" required/> */}
                <label className={styles.labelUser}><img className={styles.imgUser} src={User} alt="ico"/></label>
                {/* <input type="password" className={styles.password} name="login" placeholder="Contraseña" required/> */}
                <Input className={styles.password}
                    estado={password}
                    cambiarEstado={setPassword}
                    tipo="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                    name="password"
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                    expresionRegular={expresiones.password}
                />
                <label className={styles.labelPass}><img className={styles.imgPass} src={Password} alt="ico"/></label>
                <Link to={router}><button className={styles.btn}>Acceder</button></Link>
            </form>
            <img className={styles.cesta} src={Cesta} alt="cesta"/>
       </div>
    )
}

export default Login
