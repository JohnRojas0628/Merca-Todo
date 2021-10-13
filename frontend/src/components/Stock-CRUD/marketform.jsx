import styles from '../Add-Products/Add.module.css'
import Logo from '../../assets/Logo Merca Todo.png'
import { useHistory, useParams } from "react-router";

const CompanyForm = () => {


  return (
    <div>
      <div className="crud1">
        <img className={styles.logo2} alt="logo" src={Logo} />
      </div>


      <form>

        <label for="exampleFormControlInput1" class="form-label">PRODUCTO</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />


        <label for="exampleFormControlInput1" class="form-label">PROVEEDOR</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />



        <label for="exampleFormControlInput1" class="form-label">EXISTENCIAS</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />


        <label for="exampleFormControlInput1" class="form-label">FECHA DE LLEGADA</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />

        <label for="exampleFormControlInput1" class="form-label">DESCRIPCION</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />


        <label for="exampleFormControlInput1" class="form-label">DESCRIPCION</label>
        <input className="form-control" minLength="2" maxLength="30" autoFocus required />
        <div className="d-grid gap-2">




        </div>


      </form>







    </div>
  )

}

export default CompanyForm;
