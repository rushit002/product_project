import React, { useEffect, useState } from "react";

export default function Cart() {
  const [productCart, setProductCart] = useState();

  useEffect(() => {
    localStorageGetData();
  }, []);

  const localStorageGetData = () => {
    const getData = JSON.parse(localStorage.getItem("cartItem"));
    setProductCart(getData);
  };

  return (
    <div className="Cart-page" style={{}}>
      <div>
        {productCart &&
          productCart?.map((item) => {
            return (
             <div  style={{backgroundColor:"aliceblue",margin:"50px"}}>
               <div  className="container">
           <div className="row">
                <div className="col-md-6">
                  <img src={item.image} width="250px"/>
                </div>
                <div className="col-md-6" style={{display:"flex",alignItems:"center"}}>
                    <div className="text-box">
                    <h3 style={{textAlign:"start"}}>{item.title}</h3>
                    <div style={{textAlign:"start",display:"flex",marginTop:"20px"}}>
                         <h4 style={{fontWeight:"700"}}>{item.id}</h4>
                         <h4 style={{fontWeight:"700"}}>&#215;</h4>
                         <h4 style={{fontWeight:"700"}}>{item.price}</h4>
                         <h4 style={{fontWeight:"700"}}>=</h4>
                         <h4 style={{fontWeight:"700"}}>{item.price}</h4>
                      </div> 
                      <div className="button-box" style={{display:"flex",paddingTop:"10px"}}>
                      <button type="button" class="btn btn-outline-dark" style={{width:"52px",marginRight:"10px"}}><span>&#8722;</span>
</button>
                      <button type="button" class="btn btn-outline-dark" style={{width:"52px"}} ><span>&#43;</span></button>

                        </div>
                      </div>
                </div>
              </div>
                </div>
              </div>
            );
          })}
        ss
      </div>
    </div>
  );
}
