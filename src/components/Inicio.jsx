import React from "react";
import { useEffect, useState } from "react";
import { allPersonajes } from "../functions/Funtions";
import { BsCircleFill } from "react-icons/bs";
import loading from '../images/loading.svg'

function Inicio() {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    allPersonajes(setPersonajes);
  }, []);
    
  return (
    <>
      {personajes != null ? (
        <div className="mainContainer">
          {personajes.map((personaje) => (
            <div className="characterContainer" key={personaje.id}>
              <div className="imageContainer">
                <img
                  className="characterImage"
                  src={personaje.image}
                  alt="characterImage"
                />
              </div>
              <div className="infoContainer">
                <h2 className="name">{personaje.name}</h2>
                <div className="infoMainContainer">
                  <div className="containerStatus">
                    <BsCircleFill
                      className={`circle${personaje.status} circle`}
                    />
                    <p className={`status${personaje.status} status`}>
                      {personaje.status}
                    </p>
                  </div>
                  <p className="especie">Especie: {personaje.species}</p>
                  <p className="especie">Genero: {personaje.gender}</p>
                </div>
                <div className="buttonContainer">
                  <a href={`/personaje/${personaje.id}`} className="button">
                    Ver
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loadingContainer">
          <img src={loading} alt="Loading" />
        </div>
      )}
    </>
  );
}

export default Inicio;
