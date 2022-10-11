import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Logo from "../assets/logo.webp";

export default function CheckoutProduct() {
  const [getData, setGetData] = useState();
  const [allQuantity, setAllQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const localStorageGetData = () => {
    const localStorageData = JSON.parse(localStorage.getItem("cartItem"));
    setGetData(localStorageData);
  };

  const totalFunciton = () => {
    const initialValue = 0;
    const totalData = getData?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      initialValue
    );
    setAllQuantity(totalData);
    const totalPrice = getData?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      initialValue
    );
    console.log("totalPrice", totalPrice);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    localStorageGetData();
    totalFunciton();
  }, []);
  console.log("getData", getData);
  return (
    <div className="checkout-page">
      <div class="container">
        <div class="window">
          <div class="order-info">
            <div class="order-info-content">
              <img src={Logo} width="174px" style={{ marginTop: "165px" }} />
              <div class="total">
                <div>
                  <h6
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderTop: "1px solid",
                      borderBottom: "1px solid",
                      paddingTop: "18px",
                      paddingBottom: "18px",
                    }}
                  >
                    Quantity:<span>{allQuantity}</span>
                  </h6>
                  <h3
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    Total:<span>${totalPrice}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="credit-info">
            <div class="credit-info-content">
              <table class="half-input-table">
                <tr>
                  <td>Please select your card: </td>
                  <td>
                    <div class="dropdown" id="card-dropdown">
                      <div class="dropdown-btn" id="current-card">
                        Visa
                      </div>
                      <div class="dropdown-select">
                        <ul>
                          <li>Master Card</li>
                          <li>American Express</li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height="80"
                class="credit-card-image"
                id="credit-card-image"
              ></img>
              Card Number
              <input class="input-field"></input>
              Card Holder
              <input class="input-field"></input>
              <table class="half-input-table">
                <tr>
                  <td>
                    {" "}
                    Expires
                    <input class="input-field"></input>
                  </td>
                  <td>
                    CVC
                    <input class="input-field"></input>
                  </td>
                </tr>
              </table>
              <button class="pay-btn" onClick={() => totalFunciton()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
