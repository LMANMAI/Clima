import React, {Fragment, useState, useEffect} from 'react';
//components
import Header from './components/Header';
import Formulario from './components/Formulario';
import Respuesta from './components/Respuesta';
import Error from './components/Error';


function App() {
//states
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad:'',
    pais:''
});

  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ errorcuatro, guardarErrorCuatro ] = useState(false);

      const {ciudad, pais } = busqueda;

    useEffect(()=>{
        const consultarApi= async ()=>{
           if(consultar){
            const apiId ="84db74fc591b384fa7b5e7e80e8f0d51";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

            const resultado = await fetch(url);
            const respuesta = await resultado.json();
            
            guardarResultado(respuesta);
            guardarConsultar(false);
            //detecto si tuve un error
              if(respuesta.cod ==="404"){
                guardarErrorCuatro(true);             
              }else{
                guardarErrorCuatro(false);
              }
           }
        }
        consultarApi();
        // eslint-disable-next-line
      },[consultar]);

  let componente;
    if(errorcuatro){
      componente = <Error mensaje="No se encontro la Ciudad Buscada ;(" /> 
    }else{
      componente = <Respuesta resultado={resultado} /> 
    }

  return (
   <Fragment>
      <Header 
        titulo="ClimaApp"
      />
      <div className="contenedor-form">
        <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario
                   busqueda={busqueda}
                   guardarBusqueda={guardarBusqueda}
                   guardarConsultar={guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
            </div>
        </div>
      </div>
   </Fragment>
  );
}

export default App;
