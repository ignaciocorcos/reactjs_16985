import React, {useEffect, useState} from 'react'
import './Clicker.scss'

export const Clicker = () => {

    const [clicks, setClicks ] = useState(0)
    
    console.log( clicks )

    const sumarClick = () =>{
        setClicks( clicks + 1 ) 
    }

    
    useEffect(() => {
        
        console.log("me monte")
        return()=>{
            console.log("Me desmonté")
        }
        
    }, [])

    useEffect(() => {
        console.log( 'clics actuualizados')
    }, [clicks])

    return (
        <div onClick = {sumarClick} className={clicks %2 ===0? 'green' : 'red'}>  

            <p>Clicks:  {clicks}</p>
            <p>FyH: {new Date().toLocaleString()} </p>

        </div>
    )
}
