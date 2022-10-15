import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UserProductData } from '../../App'
import CardBox from './CardBox'
import CardBoxTitle from './CardBoxTitle'

export default function Furniture() {
  const { newGetProduct, newGetCategoriesData } = useContext(UserProductData)
  const [furnitureData,setFurnitureData]=useState()
 
  const data = useMemo(() => {
    const electronicsFilter=newGetProduct?.filter((item)=> {
      return item.category.name === "Furniture"
     })
     return setFurnitureData(electronicsFilter)
  }, [newGetProduct,newGetCategoriesData])

  
  return (
    <div>
  <div style={{backgroundColor:"#f5f5f5"}}>

<div className='container' >
  <CardBoxTitle heading={" Furniture "}/>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",gap:"40px"}}>
{
    furnitureData&&furnitureData?.map((item)=>{
        return(
          <>
          <CardBox linkName={'/Furniture'} link={item.id} title={item.title} price={item.price} img={item.images}/>
          </>
        )
      })
    }
    </div>
</div>
</div>
    </div>
  )
}
