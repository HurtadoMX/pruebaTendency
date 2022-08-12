import React from "react";
import "./pago.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pago = ({
  estado,
  cambiarEstadoModal,
  mostrarOverlay,
  posicionModal,
  cerrarTodo,
  estadoTodo,
  productos,
}) => {
  const handleClose = () => {
    cambiarEstadoModal(!estado);
    cerrarTodo(!estadoTodo);
    productos([]);
  };
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <div class="container">
            <div class="cookiesContent" id="cookiesPopup">
              <button class="close" onClick={() => handleClose()}>
                x
              </button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7032/7032655.png"
                alt="cookies-img"
              />
              <p>GRACIAS POR SU PAGO</p>
              <p>
                Agradecemos su pago, le notificaremos cuando el pago se haya
                acreditado, saludos!
              </p>
              <Link to={"/"}>
                <button class="accept" onClick={() => handleClose()}>
                  Regresar!
                </button>
              </Link>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Pago;

const Overlay = styled.div`
  margin-left: 35%;
  width: 25vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  padding: 0px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "center"};
  justify-content: center;
`;
