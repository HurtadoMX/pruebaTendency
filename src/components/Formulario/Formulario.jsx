import React from "react";
import "./formulario.css";
import styled from "styled-components";
import { useState } from "react";
import Error from "../Error/Error";

const Formulario = ({
  handleAddItem,
  estado,
  cambiarEstado,
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [src, setSrc] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [estadoError, setEstadoError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length > 0 &&
      sku.length > 0 &&
      src.length > 0 &&
      quantity.length > 0 &&
      price.length > 0
    ) {
      handleAddItem({
        name,
        sku,
        src,
        quantity,
        price,
      });
      setDescription("");
      setName("");
      setSku("");
      setSrc("");
      setQuantity("");
      setPrice("");
      cambiarEstado(false);
    } else {
      setEstadoError(!estadoError);
    }
  };
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>

            <div id="bodyy">
              <div className="container" id="container">
                <div className="content1  sign-in-container">
                  <form className="login">
                    <h2 className="tituloForm1">Formulario</h2>
                    <p className="texto"> Ingrese los datos del producto</p>

                    <p className="texto">NOMBRE, PRECIO, SKU, CANTIDAD</p>
                    <label className="label-input">
                      <i className="far fa-envelope icon-modificado"></i>
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label className="label-input">
                      <i className="fas fa-lock icon-modificado"></i>
                      <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </label>
                    <label className="label-input">
                      <i className="fas fa-lock icon-modificado"></i>
                      <input
                        type="text"
                        placeholder="Sku"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                      />
                    </label>
                    <label className="label-input">
                      <i className="fas fa-lock icon-modificado"></i>
                      <input
                        type="number"
                        placeholder="Cantidad"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </label>
                    <label className="label-input">
                      <i className="fas fa-lock icon-modificado"></i>
                      <input
                        type="text"
                        placeholder="Url Imagen"
                        value={src}
                        onChange={(e) => setSrc(e.target.value)}
                      />
                    </label>
                  </form>
                </div>

                <div className="overlay-container">
                  <div className="overlay">
                    <div className="content2 contentDir">
                      <h2 className="tituloInform">¿Todo Listo?</h2>
                      <p className="texto2">
                        Da click en el siguiente boton para agregar el producto
                        a su orden
                      </p>
                      <button
                        onClick={(e) => handleSubmit(e)}
                        className="btn2 btnCadastro2"
                        id="signUp"
                      >
                        <span>Agregar Producto</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContenedorModal>
        </Overlay>
      )}

      <Error
        estado={estadoError}
        cambiarEstado={setEstadoError}
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
      />
    </>
  );
};

export default Formulario;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0,0,0,.5)" : "rgba(0,0,0,0)"};
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "center"};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 1500px;
  min-height: 100px;
  background: transparent;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

const BotonCerrar = styled.button`
  font-family: Avenir Next Bold;
  position: absolute;
  top: 15px;
  right: 20px;

  width: 30px;
  height: 30px;
  border: none;
  background: #000;
  cursor: pointer;
  z-index: 1000;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background: #f2f2f2;
    color: #000;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
