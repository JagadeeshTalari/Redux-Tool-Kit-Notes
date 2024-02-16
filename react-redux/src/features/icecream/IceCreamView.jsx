import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from "./iceCreamSlice"

const IceCreamView = () => {
    const {noOfIceCreams}= useSelector(state => state.iceCream)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of IceCreams - {noOfIceCreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order Icecream</button>
        <button onClick={() => dispatch(restocked(2))}>Restock Icecream</button>
    </div>
  )
}

export default IceCreamView