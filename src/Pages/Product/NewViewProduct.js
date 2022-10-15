import React from 'react'
import './NewViewProduct.css'

export default function NewViewProduct() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "80px" }}>
          <div className="col-md-6">
            <img  width="250px" />
          </div>
          <div className="col-md-6">
            <div className="text-top">
              <h3></h3>
              <h1></h1>
              <div className="d-flex">
                <span style={{ fontWeight: "600", marginRight: "10px" }}>
                  Rating
                </span>{" "}
              </div>
              <h1 style={{ fontWeight: "600" }}>$</h1>
              <p></p>
            </div>
            <div className="bottom-button d-flex">
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ marginRight: "30px" }}
               
              >
                Add to Cart
              </button>
              <button type="button" class="btn btn-dark" >
                Go to Cart
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
