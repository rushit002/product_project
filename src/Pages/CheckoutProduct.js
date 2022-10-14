import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Logo from "../assets/logo.webp";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";


export default function CheckoutProduct() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "45px",
    p: 4,
  };

  const [getData, setGetData] = useState();
  const [allQuantity, setAllQuantity] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [orderNumber,setOrderNumber]=useState();
  const [userData,setUserData]=useState({
     cardNo:'',
     cardHolderName:'',
     cardExpires:'',
     cardCvc:''
  })

  const navigate = useNavigate();

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
    const Onetotal = getData?.map((item) => item.quantity * item.price);
    const totalPrice = Onetotal?.reduce((ele, sum) => ele + sum, 0);
    setTotalPrice(parseInt(totalPrice));
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const orderRandom=Math.floor(Math.random() * 1000) + 1
    setOrderNumber(orderRandom)
    
  }
  const buyProductData = () => {
    const userDataClone = { ...userData }
    userDataClone["orderNumber"] = orderNumber
    const localStorageData = []
    localStorageData.push(userDataClone)
    const localStorageDataAdd = localStorageData.concat(JSON.parse(localStorage.getItem("buyData") || "[]"));
    console.log("localStorageDataAdd", localStorageDataAdd)
    localStorage.setItem("buyData", JSON.stringify(localStorageDataAdd));
    navigate('/')
  }
  const handleChange=(e)=>{
        const name=e?.target.name
        const value=e?.target.value
        setUserData({...userData,[name]:value})
  }

  useEffect(() => {
    localStorageGetData();
    totalFunciton();
  }, [totalPrice, allQuantity]);


  return (
    <div className="checkout-page">
      <div class="container">
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Order Successful</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="box-model">
  <div class="printer-top"></div>
  <div class="paper-container">
    <div class="printer-bottom"></div>

    <div class="paper">
      <div class="main-contents">
        <div class="success-icon" style={{position:"relative"}}><CheckIcon style={{fontSize:"48px",position:"absolute",left:"12px",top:"15px"}}/></div>
        <div class="success-title">
          Payment Complete
        </div>
        <div class="success-description">
  <img src={Logo}/>
          </div>
        <div class="order-details">
          <div class="order-number-label">Order Number</div>
          <div class="order-number">{orderNumber}</div>
        </div>
        <div class="order-footer">Thank you!</div>
      </div>
      <div class="jagged-edge"></div>
    </div>
</div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{buyProductData()}}>Done</button>
      </div>
    </div>
  </div>
</div>
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
                  <td>{("please fill the form:").toUpperCase()} </td>
                </tr>
              </table>
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                height="80"
                class="credit-card-image"
                id="credit-card-image"
              ></img>
              <form onSubmit={handleSubmit}>
              Card Number
              <input class="input-field"  name="cardNo" value={userData.cardNo} onChange={handleChange}/>
              Card Holder
              <input class="input-field" name="cardHolderName"  value={userData.cardHolderName} onChange={handleChange}/>
              <table class="half-input-table">
                <tr>
                  <td>
                    {" "}
                    Expires
                    <input class="input-field" name="cardExpires"   value={userData.cardExpires} onChange={handleChange}/>
                  </td>
                  <td>
                    CVC
                    <input class="input-field" name="cardCvc"   value={userData.cardCvc} onChange={handleChange}/>
                  </td>
                </tr>
              </table>
              <button class="pay-btn" type="submit"   data-bs-toggle="modal" data-bs-target="#exampleModal">Checkout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
