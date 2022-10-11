import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Rating, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { UserProductData } from "../App";

export default function Product() {
  const {getProduct,setGetProduct,getCategoriesData,setGetCategoriesData,filterData,setFilterData}=useContext(UserProductData)
  const [alignment, setAlignment] = React.useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const filterFunction = (cat) => {
    // const filterDataMethod=getProduct&&getProduct.filter((cate)=>getCategoriesData?.find((ele)=>ele===cate.category))
    // setFilterData(filterDataMethod)
    const filterDataMethod = getProduct.filter((item) => item.category === cat);
      setFilterData(filterDataMethod);
  };

  useEffect(() => {
    filterFunction();
  }, [getProduct, getCategoriesData]);

  console.log("filterData", filterData);
  console.log("getCategoriesData", getCategoriesData);

  const ShowProduct = () => {
    return (
      <>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic outlined example"
          style={{ paddingBottom: "40px",paddingTop:"40px" }}
        >
          <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="All"    onClick={() => setFilterData(getProduct)}>All</ToggleButton>
      <ToggleButton value="men's clothing"     onClick={() => filterFunction("men's clothing")}>men's clothing</ToggleButton>
      <ToggleButton value="women's clothing"  onClick={() => filterFunction("women's clothing")}>women's clothing</ToggleButton>
      <ToggleButton value="electronics" onClick={() => filterFunction("electronics")} >electronics</ToggleButton>
      <ToggleButton value="jewelery" onClick={() => filterFunction("jewelery")}>jewelery</ToggleButton>
    </ToggleButtonGroup>
        </div>
        <div className="product-box">
          {filterData?.map((item) => {
            return (
              <>
                <div class="product-card">
                  <div class="">
                    <div id="container">
                      <div class="product-details">
                        <h1>{item.title.substring(0,20)}...</h1>
                        <span class="hint-star star">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star-o" aria-hidden="true"></i>
                        </span>

                        <p class="information d-flex">
                        <Rating name="read-only" value={item.rating.rate} readOnly />
                        </p>
                        <div class="control">
                        <NavLink  href="/buy" to={`/product/${item.id}`} class="buy">
                          <button class="btn">
                            <span class="price">${item.price}</span>
                            <span class="shopping-cart">
                           <ShoppingCartIcon/>
                            </span>
                            <span >Get now</span>
                          </button>
                          </NavLink>
                        </div>
                      </div>

                      <div class="product-image">
                        <img src={item.image} alt="" style={{padding:"40px"}}/>

                        <div class="info">
                          <h2> Description</h2>
                             <p style={{padding:"20px"}}>{item.description.substring(0,100)}...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div class="">
      <div className="Product-box">
 <ShowProduct />
      </div>
    </div>
  );
}
