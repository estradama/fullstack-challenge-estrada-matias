import {useEffect, useState } from "react";
import Personajes from "./Personajes";
import {getPersonajess} from '../service'


 



const  PersonajesPickers = () => {

    const[personajesPickers, setPersonajesPickers] = useState([]);
    const [isLoading, setIsloading]= useState(false);
    const [image , setImage]= useState('');

    useEffect(()=>{
      setIsloading(true)
      getPersonajess()
      .then((data)=> setPersonajesPickers(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsloading(false));
    
    } , []);

      return(
          <div className="page">
            {isLoading && <span className='loading-text'>Loading</span>}
            <div>
              <img src={image} alt="No hay Imagen" />
            </div>
            {personajesPickers.map((personajes) =>(
              <Personajes
              key={personajes.id}
              name={personajes.name}
              status={personajes.status}
              species={personajes.species}
              imageUrl={personajes.image}
              setImage={setImage}

      />

            ))}

          </div>


      )
  
  }
  export default PersonajesPickers;