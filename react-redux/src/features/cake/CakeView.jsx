import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered as cakeOrdered, restocked as restockCakes} from './cakeSlice'


const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.noOfCakes)
  const dispatch = useDispatch()
  const [stockValue, setStockValue] = useState("")
  return (
    <div>
        <h2>Number of Cakes  - {numOfCakes}</h2>
        <button onClick={() => dispatch(cakeOrdered())}>Order Cake</button>
        <input type="text"  onChange={(e) => setStockValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restockCakes(stockValue))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView