

import React from "react"
import StripeCheckout from "react-stripe-checkout"
import {toast} from "react-toastify"
import axios from "axios"
toast.configure();
const OnlinePay=()=>{
    const[product]=React.useState({
        name:'case pay',
        
        price:649.89
    })
    toast.configure();
    async function handleToken(token,address){
       
        const response= await axios.post("http://localhost:2000/checkout",{
            token,
            product
        });
        const {status}= response.data
        if(status==='sucess'){
            toast("success check email for details",{type:'success'})
        }
        else{
            toast("something went wrong",{type:'error'})
        }


    }
    return(
        <div>
          
            
            <StripeCheckout 
            stripeKey="pk_test_51I7iePJ9U6iFySQk6ZLacLxu1gVmtqdvfMXDqf7egI5JMCZMkqQp6n96UuCsYpH8MkeSIHXNgzXprf3yTyK8pTXB00NNY5bRCE"
            token={handleToken}
            billingAddress
            shippingAddress
            amount={product.price * 100}
            label="Pay for Criminal case 💳"

            />

        </div>
    )
}
export default OnlinePay; 