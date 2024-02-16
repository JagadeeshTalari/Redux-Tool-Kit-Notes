import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
import { nanoid } from 'nanoid'

const UserView = () => {
  const {loading, error, users} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  },[])
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
  return <div>Error: {error}</div>
  }
  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
      
    {
      users.map(user => {
        const {id, name, email} = user
        return (
          <div key={id} style={{border:" 2px solid #000", padding: "10px 20px"}}>
            <h3>{name}</h3>
            <h5>{email}</h5>
          </div>
        )
      })
    }
    </div>
  )
}

export default UserView