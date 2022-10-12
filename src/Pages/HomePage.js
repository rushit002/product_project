import React, { useContext, useEffect, useState } from 'react'
import carouselOne from '../assets/carouselOne.jpg'
import carouselTwo from '../assets/carouselTwo.jpg'
import carouselThree from '../assets/carouselThree.jpg'
import carouselFour from '../assets/carouselFour.jpg'
import { UserProductData } from '../App'

export default function HomePage() {
  const {getProduct,setGetProduct,getCategoriesData,setGetCategoriesData}=useContext(UserProductData)
   
  console.log("getProduct",getProduct)       

 const filterDataFunction=(cat)=>{
     const filterData=getProduct.filter((ele)=>ele.category===cat)
     console.log("filterData",filterData)
 }
  
 useEffect(() => {
   filterDataFunction()
  }, [])
   
  
 return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselOne} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselTwo} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselThree} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div>
   
</div>
    </div>
  )
}
