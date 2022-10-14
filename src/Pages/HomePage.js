import React, { useContext, useEffect, useState } from 'react'

import { UserProductData } from '../App'
import CategoryCmp from './CategoryCmp'
import Slider from './Slider'

export default function HomePage() {

 return (
    <div>
<Slider/>
<CategoryCmp/>
    </div>
  )
}
