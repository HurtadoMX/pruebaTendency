import axios from "axios";

export function getOrders() {
  return async function (dispatch) {
    const url = "https://eshop-deve.herokuapp.com/api/v2/orders";
    const json = await axios.get(url, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ",
      },
    });
    return dispatch({
      type: "GET_ORDERS",
      payload: json.data.orders,
    });
  };
}

export function getImagen(payload) {
  return async function (dispatch) {
    const json = await axios.get(payload, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ",
      },
    });
    return dispatch({
      type: "GET_IMAGE",
      payload: json.data.product,
    });
  };
}
