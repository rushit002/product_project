import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UserProductData } from '../../App'
import CardBox from './CardBox';
import CardBoxTitle from './CardBoxTitle';

export default function Clothes() {
  const { newGetProduct, newGetCategoriesData, newFilterData } = useContext(UserProductData)
  const [clothData,setClothData]=useState()


  const data = useMemo(() => {
    const clothFilter=newGetProduct?.filter((item)=> {
      return item.category.name === "Clothes"
     })
     return setClothData(clothFilter)
  }, [newGetProduct,newGetCategoriesData])

  
  
  return (
    <div style={{backgroundColor:"#f5f5f5"}}>

    <div className='container' >
      <CardBoxTitle heading={" Clothes "}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",gap:"40px"}}>
   {
        clothData?.map((item)=>{
            return(
              <>
              <CardBox linkName={'/viewproduct'} link={item.id} title={item.title} price={item.price} img={item.images} />
              </>
            )
          })
        }
        </div>
    </div>
    </div>
  
  )
}
