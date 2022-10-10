import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Rating } from "@mui/material";

export default function Product() {
  const [getProduct, setGetProduct] = useState([]);
  const [getCategoriesData, setGetCategoriesData] = useState();
  const [filterData, setFilterData] = useState();

  const productApi = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setGetProduct(json));
  };

  const categoriesApi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setGetCategoriesData(json));
  };
  const filterFunction = (cat) => {
    // const filterDataMethod=getProduct&&getProduct.filter((cate)=>getCategoriesData?.find((ele)=>ele===cate.category))
    // setFilterData(filterDataMethod)
    const filterDataMethod = getProduct.filter((item) => item.category === cat);
      setFilterData(filterDataMethod);
  };

  useEffect(() => {
    productApi();
    categoriesApi();
  }, []);

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
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => setFilterData(getProduct)}
          >
            All
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => filterFunction("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => filterFunction("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => filterFunction("electronics")}
          >
            Electronic
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => filterFunction("jewelery")}
          >
            Jewelery
          </button>
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
      <div className="">
        <ShowProduct />
      </div>
    </div>
  );
}
