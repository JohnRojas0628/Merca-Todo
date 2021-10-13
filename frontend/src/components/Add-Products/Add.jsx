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
           
        <div className="formulario">
            <h2 className="mb-3 text-center">Company</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={company.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Foundation</label>
                    <input type="number" name="foundation" value={company.foundation} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input type="url" name="website" value={company.website} onChange={handleInputChange} className="form-control" maxLength="100" required />
                </div>
                <div className="d-grid gap-2">
                    {params.id ? (
                        <button type="submit" className="btn btn-block btn-primary">
                            Update
                        </button>
                    ) : (
                        <button type="submit" className="btn btn-block btn-success">
                            Register
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Add
