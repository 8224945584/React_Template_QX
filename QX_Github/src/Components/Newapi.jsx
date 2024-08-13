import React, { useEffect, useState } from 'react'

export default function Newapi() {

  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    async function getdata() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
      setUserData(data);
    }
    getdata();
  }, [])

  

  return (
    <>
      <ul>
        {userData.map((user, ind) => {
          return <li key={ind}>{user.name} - {user.username}</li>
        })}
      </ul>
    </>



  )
}

