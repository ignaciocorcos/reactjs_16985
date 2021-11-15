import React, {useEffect, useState} from 'react'
import './Clicker.scss'

export const Clicker = () => {

    const [clicks, setClicks] = useState({
        x:0,
        Y:0
    } )

    
    useEffect(() => {
        
        console.log("me monte")

        const handleClick=({x,y})=>{
            console.log(x,y)

            setClicks({
                x,y
            })
        }
        window.addEventListener('click',handleClick)

        return()=>{
            console.log("Me desmonté")
            window.removeEventListener('click',handleClick)
        }
        
    }, [])

    useEffect(() => {
        console.log( 'clics actuualizados')
    }, [clicks])

    return (
        <div >  

            <p>x: {clicks.x}</p>
            <p>y: {clicks.y}</p>
            

        </div>
    )
}
