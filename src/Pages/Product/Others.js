import React, { useContext, useEffect, useMemo, useState } from 'react'
import { UserProductData } from '../../App'
import CardBox from './CardBox'
import CardBoxTitle from './CardBoxTitle'

export default function Others() {
  const { newGetProduct, newGetCategoriesData } = useContext(UserProductData)
  const [othersData,setOthersData]=useState()
 
  const data = useMemo(() => {
    const electronicsFilter=newGetProduct?.filter((item)=> {
      return item.category.name === "Others"
     })
     return setOthersData(electronicsFilter)
  }, [newGetProduct,newGetCategoriesData])

  
  return (
    <div>
  <div style={{backgroundColor:"#f5f5f5"}}>

<div className='container' >
  <CardBoxTitle heading={" Others "}/>
  <div style={{display:"grid",gridTemplateColumns:"repeat(3 ,1fr)",gap:"40px"}}>
{
    othersData&&othersData?.map((item)=>{
        return(
          <>
          <CardBox linkName={'/Others'} link={item.id} title={item.title} price={item.price} img={item.images}/>
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
