import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {findByIdUser, showCart} from "../../services/orderService";

export default function PurchaseOrder() {
    const {idUser} = useParams();
    const dispatch = useDispatch();
    const orders = useSelector(state => {
        return state.orders.orders
    })
    const carts = useSelector(state => {
        return state.orders.cart
    })


    useEffect(() => {
        dispatch(findByIdUser(idUser))
    }, [])

    const [i , setI] = useState(-1)
    return (
        <>
            <h1>Purchase Order</h1>
            {orders !== 'Can not find by id order' && orders.map((order, index) => (
                <>

                    <p>{order.id}</p>
                    <p>{order.totalPoint}</p>
                    <p>{order.status}</p>

                    <button onClick={() => {
                        dispatch(showCart(order.id))
                        setI(index)
                    }}>detail
                    </button>
                    {index === i && carts !== 'Saved cart' && carts.map(item => (
                        <tr>
                            <td><img src={item.image} alt="" style={{width: 50}}/></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                            <td>{item.description}</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </>
            ))
            }

        </>
    )
}