import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onePersonaje } from "../functions/Funtions";
import loading from "../images/loading.svg";
import { BsCircleFill } from "react-icons/bs";
import portal from "../images/portal.png";
import "../styles/animation.css";

function Personaje() {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  useEffect(() => {
    onePersonaje(params.id, setPersonaje);
  }, []);

  return (
    <div>
      {personaje ? (
        <div>
          <div className="headerContainer">
            <div className="imageName">
              <img
                className="onePersonajeImage"
                src={personaje.image}
                alt="ImagenPersonaje"
              />
              <div>
                <h2 className="oneNamePersonaje">{personaje.name}</h2>
                <div className="containerChild">
                <BsCircleFill className={`circle${personaje.status} circle`} />
                <p className={`status${personaje.status} status`}>{personaje.status}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="infoOnePersonajeContainer">
            <div className="infoOnePersonaje">
              <img className="portal" src={portal} alt="PortalImage" />
              <img
                className="imagePersonajeOne"
                src={personaje.image}
                alt="personajeImage"
              />
            </div>
            <div className="info">
              <h2>Nombre: {personaje.name}</h2>
              <h2>Especie: {personaje.species}</h2>
              <h2>Origen: {personaje.origin.name}</h2>
              <h2>Genero: {personaje.gender}</h2>
              <h2>Episodios: {personaje.episode.length}</h2>
              <h2>Localización: {personaje.location.name}</h2>
              <div className="containerChildInfo">
                <BsCircleFill className={`circle${personaje.status} circle`} />
                <p className={`status${personaje.status} status`}>{personaje.status}</p>
              </div>
              <div className="buttonVolverContainer">
                <a href="/" className="buttonVolver">Volver</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingContainer">
          <img src={loading} alt="Cargando" />
        </div>
      )}
    </div>
  );
}

export default Personaje;
