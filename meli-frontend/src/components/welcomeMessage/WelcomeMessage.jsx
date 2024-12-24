import React from "react";
import useWelcomeMessage from "./useWelcomeMessage";

const WelcomeMessage = () => {
  const { showWelcome, handleClose } = useWelcomeMessage();

  if (!showWelcome) return null;

  return (
    <div className="message">
      <button
        onClick={handleClose}
        className="message__close"
        aria-label="Cerrar mensaje"
      >
        x
      </button>
      <h2 className="message__title">Hola</h2>
      <p className="message__text">
        Para realizar busquedas, solo debes ingresar el nombre de lo que
        necesites. Pueden ser productos, marcas y mas...
      </p>
    </div>
  );
};

export default WelcomeMessage;
