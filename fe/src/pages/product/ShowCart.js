import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByStatus, showCart} from "../../services/orderService";
import {useParams} from "react-router-dom";


export default function ShowCart(){
    const {id} = useParams()
    const dispatch = useDispatch();
    const order = useSelector(state=>{
        if (state !== undefined)
            return state.orders.order[0]
    })
    const carts = useSelector(state=>{
        return  state.orders.cart
    })

    useEffect(()=>{
        dispatch(findByStatus(id))
    },[])

    useEffect(()=>{
        dispatch(showCart(order.id))
    },[])




    return(
        <>
            <table>
                <tr>
                    <td></td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {carts !== undefined && carts.map(item=>(
                    <tr>
                        <td><img src={item !== undefined && item.image} alt="" style={{width:50}}/></td>
                        <td>{item !== undefined && item.description}</td>
                        <td>{item !== undefined && item.price}</td>
                        <td>{item !== undefined && item.quantity}</td>
                        <td>{item !== undefined && item.total}</td>
                        <td>{item !== undefined && item.description}</td>
                        <td>Delete</td>
                    </tr>
                ))}
            </table>
            <p style={{marginLeft:980}}>Total point</p>
            <hr/>
            <Formik>
                <Form>
                    <Field name={'receiver'}/>
                    <Field name={'address'}/>
                    <Field name={'phone'}/>
                    <Field name={'time'}/>
                    <button>Buy</button>
                </Form>
            </Formik>
            <br/>

        </>
    )
}
