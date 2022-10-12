import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [productCart, setProductCart] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [quantityRemove, setQuantityRemove] = useState([]);
  const navigate = useNavigate();

  const localStorageGetData = () => {
    const getData = JSON.parse(localStorage.getItem("cartItem"));
    setProductCart(getData);
  };

  const quantityAdd = (item) => {

      // const total = parseInt(item.price * item.quantity);
      // const itemClone = { ...item };
      // itemClone.total = total;
      // console.log("total", itemClone);
if(item){

  setQuantity((item.quantity = item.quantity + 1));
  if (item) {
    const localstorageData = [];
    localstorageData.push(item);
    const localstorageDataAdd = localstorageData.concat(
      JSON.parse(localStorage.getItem("cartItem") || "[]")
    );
    const filterData = productCart?.filter((ele) =>
      localstorageDataAdd.find((item) => item.id === ele.id)
    );
    localStorage.setItem("cartItem", JSON.stringify(filterData));
  }
}
  };

  const quantityremove = (item) => {
    if (item) {
      setQuantityRemove((item.quantity = item.quantity - 1));
      const localstorageData = [];
      localstorageData.push(item);
      const localstorageDataAdd = localstorageData.concat(
        JSON.parse(localStorage.getItem("cartItem") || "[]")
      );
      const filterData = productCart.filter((ele) =>
        localstorageDataAdd.find((item) => item.id === ele.id)
      );
      localStorage.setItem("cartItem", JSON.stringify(filterData));
    }
  };

  useEffect(() => {
    localStorageGetData();
    quantityAdd();
  }, []);

  return (
    <div className="Cart-page">
      <div>
        <button
          type="button"
          class="btn btn-outline-info"
          style={{ marginTop: "42px" }}
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <ShoppingCartCheckoutIcon /> Checkout
        </button>

        {productCart &&
          productCart?.map((item) => {
            const total = item.price * item.quantity;
            return (
              <div
                style={{
                  backgroundColor: "aliceblue",
                  margin: "50px",
                  borderRadius: "100px",
                }}
              >
                <div className="">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={item?.image}
                        width="250px"
                        style={{ margin: "70px" }}
                      />
                    </div>
                    <div
                      className="col-md-6"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="text-box">
                        <h3 style={{ textAlign: "start" }}>{item?.title}</h3>
                        <div
                          style={{
                            textAlign: "start",
                            display: "flex",
                            marginTop: "20px",
                          }}
                        >
                          <h4 style={{ fontWeight: "700" }}>
                            {item?.quantity}
                          </h4>
                          <h4 style={{ fontWeight: "700" }}>&#215;</h4>
                          <h4 style={{ fontWeight: "700" }}>${item?.price}</h4>
                          <h4 style={{ fontWeight: "700" }}>=</h4>
                          <h4 style={{ fontWeight: "700" }}>
                            ${parseInt(total)}
                          </h4>
                        </div>
                        <div
                          className="button-box"
                          style={{ display: "flex", paddingTop: "10px" }}
                        >
                          <button
                            type="button"
                            class="btn btn-outline-dark"
                            style={{ width: "52px", marginRight: "10px" }}
                            onClick={() => quantityremove(item)}
                          >
                            <span>&#8722;</span>
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-dark"
                            style={{ width: "52px" }}
                            onClick={() => quantityAdd(item)}
                          >
                            <span>&#43;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
