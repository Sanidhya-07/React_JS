import React from 'react'

const DynamicContent = () => {

    const name = "sanidhya naik";
    const date = new Date().toLocaleDateString()
  return (

    <div>
      <h1>Name: {name}</h1>
      <h3>Date: {date}</h3>
    </div>
  )
}

export default DynamicContent