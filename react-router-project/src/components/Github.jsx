import React, { useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
   // const[data, setData] =useState([])
    const data = useLoaderData()
    // useEffect(()=> {
    // fetch('https://api.github.com/users/karankhulbe')
    // .then(response=>response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
    // })
    // },[])
  return (
    <div className='tet-center m-4 bg-gray-500 text-white text-3xl p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300} />
     </div>
  )
}

export default Github

export const githubinfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/karankhulbe')
   return response.json()
}