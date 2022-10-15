import React from 'react'
import { NavLink } from 'react-router-dom'
import './CardBox.css'

export default function CardBox(props) {
  return (
    <div>
      <div>
      <div class="container">
      <NavLink href="/clothe" to={`${props.linkName}/${props.link}`} class="buy" style={{ textDecoration: "none" }}>
  <div class="card">
    <div class="gradient"></div>
    <div class="product-options">
    </div>
    <div class="more-options-container">
      <div class="more-options">
        <i class="icon-anim image-change-icon bi bi-shuffle"></i>
        <i class="icon-anim heart-icon bi bi-heart"></i>
        <i class="icon-anim bi bi-chat-square-text"></i>
        <i class="icon-anim bi bi-upload"></i>
      </div>
      </div>
  <div class="image-container">
    <img src={props.img} width="342px"/>
    </div>
    <div class="row-1">
      <h1 class="title"></h1>
      <h1 class="price" style={{color:"#212529"}}>$ {props.price}</h1>
    </div>
    <div class="row-2">
      <p class="color-text" style={{color:"#212529"}}>Colors</p>
      <div class="available-colors">
        <div title="Black" class="color-item" style={{background:"rgb(33, 32, 33)"}} ></div>
      <div title="Dark brown" class="color-item" style={{background:"rbackground: rgb(61, 35, 37)"}}></div>
      <div title="White" class="color-item" style={{background:"white"}}></div></div>
    </div>
    <div class="row-3">
      <h6 style={{color:"#212529"}}>{props.title}</h6>
    </div>
    <button class="add-to-cart-btn" style={{color:"white"}}><i class="bi bi-handbag"></i>Add to Cart</button>
  </div>
</NavLink>
</div>
      </div>
    </div>
  )
}
