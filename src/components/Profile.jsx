import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);
    if(!user) return <h1>No User Found</h1>
  return (
    <>
          <h1>Hello {user.userName}</h1>
          
    </>
  )
}

export default Profile
