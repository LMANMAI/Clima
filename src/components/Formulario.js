import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Formulario = ({busqueda,guardarBusqueda, guardarConsultar}) => {

    //States
    const {ciudad, pais } = busqueda;
    const [ error, guardarError ] = useState(false);

    //funciones
    const handleChange = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        //validar
            if(ciudad.trim( )==='' || pais.trim() ===''){
                guardarError(true);
                
                return;

            }
        guardarError(false);
        guardarConsultar(true);
    }
  
    return ( 
       <div className="card teal darken-2 col s12">
        <form className="formulario" onSubmit={handleSubmit}>
            {error ?<p className="error red darken-4">Todos los campos son obligatorios</p> :null}
            <div className="input-field col s12">
                 <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                 />
                 <label htmlFor="ciudad">La Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleChange}
                    >
                    <option value="">Elije el Pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais</label>
            </div>   
            <input
                className="waves-effect waves-light btn center col s12 btn-block"
                type="submit"
                value="Revisar clima"               
            />         
        </form>
       </div>
     );
}
 Formulario.propTypes={
     busqueda : PropTypes.object.isRequired,
     guardarBusqueda : PropTypes.func.isRequired,
     guardarConsultar : PropTypes.func.isRequired
 }
export default Formulario;