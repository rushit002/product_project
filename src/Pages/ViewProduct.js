import { Rating } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { UserProductData } from "../App";

export default function ViewProduct() {
  const {getProduct,setGetProduct,getCategoriesData,setGetCategoriesData,filterData,setFilterData}=useContext(UserProductData)

const navigate = useNavigate();
   const { id } = useParams();
  const [product, setProduct] = useState();

  const productApi = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => 
      setProduct(json));
  };

console.log("getProduct",getProduct)

  const addToCart = () => {
    const quantityAdd=getProduct&&getProduct?.map(item=>({...item,total:0,price:0}))
    console.log("quantityAdd",quantityAdd)

    const localstorageData = [];
    localstorageData.push(product);
    const localstorageDataAdd = localstorageData.concat(JSON.parse(localStorage.getItem("cartItem") || "[]"));
    const filterData=getProduct.filter(ele=>localstorageDataAdd.find(item=>item.id===ele.id))
    localStorage.setItem("cartItem", JSON.stringify(filterData));
  };  

  useEffect(() => {
    productApi();
  }, []);
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "80px" }}>
          <div className="col-md-6">
            <img src={product?.image} width="250px" />
          </div>
          <div className="col-md-6">
            <div className="text-top">
              <h3>{product?.category}</h3>
              <h1>{product?.title}</h1>
              <div className="d-flex">
                <span style={{ fontWeight: "600", marginRight: "10px" }}>
                  Rating
                </span>{" "}
                <Rating
                  name="read-only"
                  value={product?.rating?.rate}
                  readOnly
                />
              </div>
              <h1 style={{ fontWeight: "600" }}>${product?.price}</h1>
              <p>{product?.description}</p>
            </div>
            <div className="bottom-button d-flex">
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ marginRight: "30px" }}
                onClick={() => addToCart()}
              >
                Add to Cart
              </button>
              <button type="button" class="btn btn-dark" onClick={()=>{navigate('/cart')}}>
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
