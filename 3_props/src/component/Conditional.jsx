import React from 'react'

const ValidPassword = () => <h1 style={{color: 'green'}}>VALID</h1>
const InvalidPassword = () => <h1 style={{color: 'red'}}>INVALID</h1>


const Conditional = ({isValid}) => {
        {
            if(isValid){
                return <ValidPassword />
            } 
            else{
                
                return <InvalidPassword />
            }
        }
}

export default Conditional