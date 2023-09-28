export default function CartPage ({cart}){

    const findRepeats =[];
    //make this code universal to prevent other add cart buttons from adding individually
    cart.forEach((item) => {
        const index = findRepeats.findIndex((rItem) => rItem.id === item.id);
    
        if (index !== -1) {
            findRepeats[index].quantity += item.quantity;
        } else {
          findRepeats.push({ ...item });
        }
      });
    return(
        <div>
            <h1> Cart</h1>

            {cart.length===0? (
                <p>There are no Items in Cart</p>
        
            ):(
                <ul>
                    {cart.map(({id,title,image, quantity})=>(
                        <li key={id}>
                            <h2>{title},</h2>
                            <img src={image}/>,
                            <p> Quantity: {quantity}</p>
                        </li>
                    ))}
                    
                </ul>
            )}
        </div>
    )
}