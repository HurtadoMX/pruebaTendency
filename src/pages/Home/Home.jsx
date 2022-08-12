import React from "react";

import { useEffect } from "react";
import { getImagen, getOrders } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Detail from "../Detail/Detail";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders);
  const imagen = useSelector((state) => state.image);

  let imagenUrl =
    "https://eshop-deve.herokuapp.com/api/v2/products/4591541944460";

  const [id, setId] = useState();
  const [tags, setTags] = useState();
  const [number, setNumber] = useState();
  const [nombre, setNombre] = useState();
  const [segundoNombre, setSegundoNombre] = useState();
  const [direccion, setDireccion] = useState();
  const [ciudad, setCiudad] = useState();
  const [pais, setPais] = useState();
  const [telefono, setTelefono] = useState();
  const [producto, setProducto] = useState();
  const [sku, setSku] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [subtotal, setSubtotal] = useState();
  const [total, setTotal] = useState();
  const [urlImage, setUrlImage] = useState();
  const [estado, setEstado] = useState(false);

  let orders = [];

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrders());
      dispatch(getImagen(imagenUrl));
    }, 5000);
  }, []);

  for (let i = 0; i < allOrders.length; i++) {
    orders.push(allOrders[i].items);
  }

  console.log("allOrders", allOrders);
  console.log("imagen", imagen);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleInfo = () => {};

  return (
    <>
      {allOrders.length > 0 ? (
        <div className="home">
          <br />
          <br />
          <br />

          <div className="containerHome">
            {allOrders.map((e, i) => {
              return (
                <div className="wrapperHome" style={{ marginBottom: "20px" }}>
                  <div className="idOrder">id: {e.id}</div>
                  <div>number: {e.number}</div>

                  <div>Comprador</div>
                  <div>Nombre: {e.billingAddress.firstName} </div>
                  <div>Apellido: {e.billingAddress.lastName}</div>
                  <div>Direccion: {e.billingAddress.address1}</div>
                  <div>Ciudad: {e.billingAddress.city}</div>
                  <div>Pais: {e.billingAddress.country.name}</div>
                  <div>Telefono: {e.billingAddress.phone}</div>

                  <br />

                  <button
                    className="boton btn4"
                    onClick={() =>
                      handleInfo(
                        setId(e.id),
                        setTags(e.tags[0]),
                        setNumber(e.number),
                        setNombre(e.billingAddress.firstName),
                        setSegundoNombre(e.billingAddress.lastName),
                        setDireccion(e.billingAddress.address1),
                        setCiudad(e.billingAddress.city),
                        setPais(e.billingAddress.country.name),
                        setTelefono(e.billingAddress.phone),
                        setProducto(e.items[0].name),
                        setSku(e.items[0].sku),
                        setQuantity(e.items[0].quantity),
                        setPrice(e.items[0].price),
                        setSubtotal(e.totals.subtotal),
                        setTotal(e.totals.total),
                        setUrlImage(e.items[0].ecartapiUrl),
                        setEstado(!estado)
                      )
                    }
                  >
                    Ver mas...
                  </button>

                  <br />
                  <br />
                </div>
              );
            })}

            <Detail
              // status = {status}
              estado={estado}
              cambiarEstado={setEstado}
              titulo="Hola!"
              mostrarHeader={true}
              mostrarOverlay={true}
              posicionModal={"center"}
              padding={"20px"}
              id={id}
              tags={tags}
              number={number}
              nombre={nombre}
              segundoNombre={segundoNombre}
              direccion={direccion}
              ciudad={ciudad}
              pais={pais}
              telefono={telefono}
              producto={producto}
              sku={sku}
              quantity={quantity}
              price={price}
              subtotal={subtotal}
              total={total}
              imagen={imagen.imageUrl}
            ></Detail>
          </div>
        </div>
      ) : (
        <div id="loader">
          <div className="svg">
            <svg
              version="1.1"
              id="svg"
              x="0px"
              y="0px"
              width="150px"
              height="150px"
              viewBox="0 0 213.235 241.176"
              enable-background="new 0 0 213.235 241.176"
              fill="#0057B8"
            >
              <path d="M108.581,64.968V14.124l44.007,25.422L108.581,64.968" />
              <path
                fill-opacity="0.9"
                d="M153.591,92.101V41.258L109.582,66.68L153.591,92.101"
              />
              <path d="M155.586,92.062V41.221l44.009,25.42L155.586,92.062" />
              <path
                fill-opacity="0.7"
                d="M200.299,119.14V68.297l-44.004,25.421L200.299,119.14"
              />
              <path
                fill-opacity="0.85"
                d="M155.586,146.255V95.412l44.009,25.422L155.586,146.255"
              />
              <path
                fill-opacity="0.7"
                d="M200.299,173.35v-50.844l-44.004,25.422L200.299,173.35"
              />
              <path
                fill-opacity="0.6"
                d="M155.586,200.482v-50.84l44.009,25.417L155.586,200.482"
              />
              <path
                fill-opacity="0.5"
                d="M153.591,200.521v-50.84l-44.009,25.418L153.591,200.521"
              />
              <path
                fill-opacity="0.6"
                d="M108.581,227.696v-50.844l44.007,25.421L108.581,227.696"
              />
              <path
                fill-opacity="0.5"
                d="M106.62,227.696v-50.844l-44.005,25.421L106.62,227.696"
              />
              <path
                fill-opacity="0.7"
                d="M61.562,200.553V149.71l44.007,25.423L61.562,200.553"
              />
              <path
                fill-opacity="0.7"
                d="M59.709,200.56v-50.843l-44.008,25.422L59.709,200.56"
              />
              <path
                fill-opacity="0.7"
                d="M14.699,173.467v-50.843l44.01,25.42L14.699,173.467"
              />
              <path
                fill-opacity="0.5"
                d="M59.709,146.235V95.392l-44.008,25.42L59.709,146.235"
              />
              <path
                fill-opacity="0.7"
                d="M14.699,119.141V68.297l44.01,25.421L14.699,119.141"
              />
              <path
                fill-opacity="0.6"
                d="M59.709,92.101V41.258L15.701,66.68L59.709,92.101"
              />
              <path
                fill-opacity="0.85"
                d="M61.562,92.092V41.249l44.007,25.419L61.562,92.092"
              />
              <path
                fill-opacity="0.9"
                d="M106.62,64.968V14.124L62.614,39.546L106.62,64.968"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
