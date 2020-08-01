import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
const Respuesta = ({resultado}) => {
  
//destructurar valores 
    const { name, main } = resultado;
      if(!name) return null;
        const kelvin = 273;
   //Revisar la temperatura

    const revisarTemp= (temp)=>{
        let climaTemp;
        if(temp<13){
            climaTemp="bbdefb";
        }else if(temp>22){

            climaTemp="ff8a65 ";
        }else{
            climaTemp="ffee58";
        }
        return climaTemp; 
   }
    return ( 
        <Fragment>
             <div className="row">
              <div className="col s12">
                <div className="card">
                    <div className="card-image">
                       <img className={`iamgen sun ${revisarTemp(parseFloat(main.temp - kelvin,10).toFixed(2))}`} alt=""/>
                       <span className="card-title">{name}</span>
                </div>
                    <div className="card-content">
                        <h4>Temperatura: {parseFloat(main.temp - kelvin,10).toFixed(2)}<span>&#x2103;</span></h4>
                        <p>Temperatura Maxima: {parseFloat(main.temp_max - kelvin,10).toFixed(2)}<span>&#x2103;</span></p>
                        <p>Temperatura Minima: {parseFloat(main.temp_min - kelvin,10).toFixed(2)}<span>&#x2103;</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
Respuesta.propTypes={
    resultado: PropTypes.object.isRequired
}
export default Respuesta;

