import React, { useState } from 'react'

const useData = () => {
  const [userDetails,setUserDetails]=useState({})
const handleChange=(e)=>{
setUserDetails({...userDetails,[e.target.name]:e.target.value})
}

  return {userDetails, handleChange}
}

export default useData