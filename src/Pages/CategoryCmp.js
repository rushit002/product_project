import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserProductData } from '../App'
import './CategoryCmp.css'

export default function CategoryCmp() {
  const [getCategoryData, setGetCategoryData] = useState()
  const {newGetProduct,newGetCategoriesData,newFilterData}=useContext(UserProductData)

  const getDataApi=()=>{
      fetch("https://api.escuelajs.co/api/v1/categories")
      .then(res=>res.json())
      .then(json=>setGetCategoryData(json))
  }
    useEffect(() => {
   getDataApi()
    }, [])



  return (
    <div>
<section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
         All
          <span class="b-class-secondary"> Category </span>
        </h2>
        <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
      </div>
    </div>
    <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
        {
            getCategoryData?.map((item)=>{
                return(
                  <div class="col">
                    <div class="service-card">
                      <NavLink href="/about" to={`/${item?.name}`} class="buy" style={{ textDecoration: "none" }}>
                      <img src={item.image} width="291px"/>
                      <h3>{item.name}</h3>
                    </NavLink>
                    </div>
                  </div>
                )
            })
}
    
    </div>
  </div>
</section>
    </div>
  )
}
