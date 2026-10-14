import React from 'react'

const Greeting = (props) => {

    return props.timeOfDay === "Morning" ? <h1>Hello, Good Morning!</h1> : <h1>Hello, Good Evening!</h1>
 
}

export default Greeting