
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addOrder, editOrder, getOrder, showCart} from "../../services/orderService";
import {useNavigate} from "react-router-dom";

export default function ManagerOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orders = useSelector(state => {
        return state.orders.orders
    })
    const carts = useSelector(state => {
        return state.orders.cart
    })


    useEffect(() => {
        dispatch(getOrder())
    }, [])

    const [i , setI] = useState(-1)
    return (
        <>
            <h1>Manager Order</h1>
            {orders !== 'Can not find by id order' && orders.map((order, index) => (
                <>
                    <button onClick={()=>{
                        let value = {
                            id: order.id,
                            status: 'moving'
                        }
                        dispatch(editOrder(value))
                    }}>Confirm</button>
                    <p>Order ID: {order.id}</p>
                    <p>Total Price: {order.totalPoint}</p>
                    <p>Status: {order.status}</p>

                    <button onClick={() => {
                        dispatch(showCart(order.id))
                        setI(index)
                    }}>Detail
                    </button>
                    {index === i && carts !== 'Saved cart' && carts.map(item => (
                        <tr>
                            <td><img src={item.image} alt="" style={{width: 50}}/></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                    <hr/>
                </>
            ))
            }

        </>
    )
}