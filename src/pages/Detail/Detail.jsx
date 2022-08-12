import React, { useEffect, useState } from "react";
import Formulario from "../../components/Formulario/Formulario";
import "./detail.css";
import styled from "styled-components";
import Pago from "../../components/Pago/Pago";

const Detail = ({
  estado,
  cambiarEstado,
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
  number,
  nombre,
  segundoNombre,
  direccion,
  ciudad,
  pais,
  telefono,
  producto,
  sku,
  quantity,
  price,
  imagen,
}) => {
  const [list, setList] = useState([]);
  const [formulario, setFormulario] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  //   for (let i = 0; i < allOrders.length; i++) {
  //     orders.push(allOrders[i].items)
  //   };

  // console.log("allOrders",allOrders)

  const handleForm = () => {
    setFormulario(!formulario);
  };

  const handleClose = () => {
    cambiarEstado(false);

    setList([]);
  };
  console.log("list", list);

  const handlePay = () => {
    setPayment(!payment);
  };

  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>
            {mostrarHeader && (
              <EncabezadoModal>
                <h3> Numero de compra {number}</h3>
              </EncabezadoModal>
            )}

            <BotonCerrar onClick={() => handleClose()}>
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
            <div className="containerInfo">
              <button className="butn btn-white btn-animate" onClick={handlePay}>
                Pagar
              </button>
              <button
                className="butn btn-white btn-animate"
                style={{ marginLeft: "60%" }}
                onClick={handleForm}
              >
                Agregar producto
              </button>
              <h6>
                Cliente: {nombre} {segundoNombre}
              </h6>
              <h6>Direccion: {direccion}</h6>
              <h6>Ciudad: {ciudad}</h6>
              <h6>Pais: {pais}</h6>
              <h6>Telefono: {telefono}</h6>
            </div>

            <br />

            <div className="containerPorducts">
              <div id="body">
                <div className="wrapper">
                  <div className="card">
                    <div className="front">
                      <h1>{producto}</h1>
                      {/* <p>7.7 deck<span>2018</span></p> */}
                      <p className="price">$ {price}</p>
                    </div>
                    <div className="right">
                      <h2>{producto}</h2>
                      <ul>
                        <li>Price: ${price}</li>
                        <li>Quantity: {quantity}</li>
                        <li>Sku: {sku}</li>
                      </ul>
                      {/* <button>Add to cart, yo</button> */}
                    </div>
                  </div>
                  <div className="img-wrapper">
                    <img src={imagen} alt="" />
                  </div>
                </div>
              </div>

              {list.length > 0
                ? list.map((e) => {
                    return (
                      <div id="body">
                        <div className="wrapper">
                          <div className="card">
                            <div className="front">
                              <h1>{e.name}</h1>
                              {/* <p>7.7 deck<span>2018</span></p> */}
                              <p className="price">$ {e.price}</p>
                            </div>
                            <div className="right">
                              <h2>{e.name}</h2>
                              <ul>
                                <li>Price: ${e.price}</li>
                                <li>Quantity: {e.quantity}</li>
                                <li>Sku: {e.sku}</li>
                              </ul>
                              {/* <button>Add to cart, yo</button> */}
                            </div>
                          </div>
                          <div className="img-wrapper">
                            <img src={e.src} alt="" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </ContenedorModal>
        </Overlay>
      )}

      <Formulario
        handleAddItem={handleAddItem}
        estado={formulario}
        cambiarEstado={setFormulario}
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      />
      <Pago
        productos={setList}
        estado={payment}
        cambiarEstadoModal={setPayment}
        estadoTodo={estado}
        cerrarTodo={cambiarEstado}
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      />
    </>
  );
};

export default Detail;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0,0,0,.5)" : "rgba(0,0,0,0)"};
  padding: 0px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "center"};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 1250px;
  min-height: 100px;
  height: 90vh;
  background-image: linear-gradient(
    -55deg,
    rgba(50, 45, 55, 1) 0%,
    rgba(101, 96, 106, 1) 100%
  );
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-family: Avenir Next Bold;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
  }
`;

const BotonCerrar = styled.button`
  font-family: Avenir Next Bold;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 2;
  width: 30px;
  height: 30px;
  z-index: 99999;
  border: none;
  background: none;
  cursor: pointer;
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
