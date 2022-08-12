import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = ({ estado, cambiarEstado, mostrarOverlay, posicionModal }) => {
  const handleClose = () => {
    cambiarEstado(!estado);
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
                src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
                alt="cookies-img"
              />
              <p>ERROR</p>
              <p>
                Porfavor, complete correctamente los campos del formulario y
                vuelva a intentar
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

export default Error;

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
