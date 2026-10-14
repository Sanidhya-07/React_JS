import React from 'react'

const AddEvents = () => {

    //event handler function
    const MoveHandler = () =>{
        console.log("Mouse is moving on paragraph")
    }

    const CopyHandler = () =>{
        console.log("Don't copy the text")
    }



  return (
    <div>
        <button onClick={ () => {alert("you clicked button")}}>
            Click Me
        </button>
        <p onMouseMove={MoveHandler}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptate.
        </p>
        <p onCopy={CopyHandler}>
            lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptate.
            lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, voluptate.
        </p>
    </div>
  )
}

export default AddEvents