

export const ItemDetail = ({id, name, img, desc, price, category}) =>{

    return(
        <div>
            
            <h2>{name}</h2>
            <img src={img} alt= {name} />
            <p>{desc}</p>
            <p>Precio: ${price}</p>

        </div>
    )
}