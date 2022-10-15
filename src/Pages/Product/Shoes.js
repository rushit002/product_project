import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UserProductData } from '../../App'
import CardBox from './CardBox'
import CardBoxTitle from './CardBoxTitle'

export default function Shoes() {
  const { newGetProduct, newGetCategoriesData } = useContext(UserProductData)
  const [shoesData,setShoesData]=useState()
 
  const data = useMemo(() => {
    const shoesFilter=newGetProduct?.filter((item)=> {
      return item.category.name === "Shoes"
     })
     return setShoesData(shoesFilter)
  }, [newGetProduct,newGetCategoriesData])

  
  return (
    <div>
  <div style={{backgroundColor:"#f5f5f5"}}>

<div className='container' >
  <CardBoxTitle heading={" Shoes "}/>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",gap:"40px"}}>
{
    shoesData&&shoesData?.map((item)=>{
        return(
          <>
          <CardBox linkName={'/Shoes'} link={item.id} title={item.title} price={item.price} img={item.images}/>
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
