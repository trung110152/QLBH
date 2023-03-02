import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
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

    const [i, setI] = useState(-1)
    return (
        <>
            <h1>Manager Order</h1>
            {orders !== 'Can not find by id order' && orders.map((order, index) => (
                <>
                    <div className="row" id="table1">
                        <div className="col-12">
                            <button className="btn btn-outline-secondary" onClick={() => {
                                let value = {
                                    id: order.id,
                                    status: 'moving'
                                }
                                dispatch(editOrder(value))
                            }}>Confirm
                            </button>
                            <p> Order ID: {order.id}</p>
                            <p>Total Price: {order.totalPoint}</p>
                            <p>Time: {order.time}</p>
                            <p>Status: {order.status}</p>
                            <p>username: {order.username}</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3 col-12 d-flex justify-content-center">
                            <button className="btn btn-outline-secondary m-auto" onClick={() => {
                                dispatch(showCart(order.id))
                                setI(index)
                            }}>Detail
                            </button>
                        </div>
                    </div>
                    {index === i && carts !== 'Saved cart' &&
                        <>
                            <div className="row">
                                <div className="col-12">

                                    <table style={{textAlign: "center"}}>
                                        <thead>
                                        <tr className='.bg-secondary'>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Description</th>
                                        </tr>
                                        </thead>
                                        {carts.map(item => (
                                            <tbody>
                                            <tr>
                                                <td><img src={item.image} alt="" style={{width: 50}}/></td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.total}</td>
                                                <td>{item.description}</td>
                                            </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>

                        </>
                    }
                    <hr/>
                </>
            ))
            }

        </>
    )
}