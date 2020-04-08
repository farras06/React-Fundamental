import React from "react"

const Button = () => {
    const buttonclick = () => {
        alert('Mantap')
    }
    return ( 
        <div>
            <input onClick={buttonclick} type="button" value='click me' style={{fontSize: '16px'}}/>

        </div>
        
    )
}

const NewScreen = () => {
    return  (
        <div>
            <h2>New Scren</h2> 
            <Button />

        </div>
    ) 
}

export default NewScreen