import { Rating } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function About() {
  const [getData, setGetData] = useState()

  const apiGetData = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(json => setGetData(json))
  }
  useEffect(() => {
    apiGetData()
  }, [])

  console.log("getdata", getData)
  return (
    <div>
      <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                All
                <span class="b-class-secondary"> Product </span>
              </h2>
              <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
            </div>
          </div>
          <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {
              getData && getData?.map((item) => {
                return (
                  <div class="col">
                    <NavLink href="/about" to={`/about/${item?.id}`} class="buy" style={{ textDecoration: "none" }}>
                      <div class="service-card" >
                        <img src={item.images} width="291px" />
                        <h3>{item.title}</h3>
                        <h4 style={{ textDecoration: "none", color: "#1f194cs" }}>${item.price}</h4>
                        <button class="btn">
                          <span style={{ color: "white" }}>Get now</span>
                        </button>
                      </div>
                    </NavLink>  
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
