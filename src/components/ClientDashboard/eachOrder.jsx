import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const EachOrder = () =>{
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:3000/api/assignments/getAssignment/${id}`)
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }

                const data = await response.json()
                setOrder(data.assignment)

            } catch(error){
                console.error(error)
              }finally{
                setLoading(false);
              }
        }

        fetchOrder()
    },[])

    console.log(order)

    return(
        <>
           <div>
                <div>
                    <h2>Order Title: {order.title}</h2>
                    <p>Order Description: {order.description}</p>
                    <p>Order Format: {order.format}</p>
                    <p>Order Deadline: {order.deadline}</p>
                    <p>Order Status: {order.status}</p>
                </div>
                
           </div>
        </>

    )
}

export default EachOrder;