import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addOrder, deleteCart, editOrder, findByStatus, showCart} from "../../services/orderService";
import {useNavigate, useParams} from "react-router-dom";

export default function ShowCart(){
    const {idOrder} = useParams();

    const navigate = useNavigate()

    const user = useSelector(state=>{
        return state.user.currentUser
    })

    const dispatch = useDispatch();

    const carts = useSelector(state=>{
        return  state.orders.cart
    })

    useEffect(()=>{
        dispatch(showCart(idOrder))
    },[])

let totalPoint = 0;


    return(
        <>
        {
            carts.length === 0? <><p>No product</p></>:<>
            <table>
                <tr>
                    <td></td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {carts !== 'Saved cart' && carts.map(item=>(
                    totalPoint += item.total,
                        <tr>
                            <td><img src={item.image} alt="" style={{width:50}}/></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                            <td>{item.description}</td>
                            <td><button onClick={()=>{
                                dispatch(deleteCart(item.id)).then(()=>{
                                    dispatch(showCart(idOrder))
                                })
                            }}>Delete</button></td>
                        </tr>
                ))}
            </table>
            <p style={{marginLeft:800, color: "red"}}>Total point: {totalPoint} $</p>
            <hr/>
            <Formik
                initialValues={{
                    id:idOrder,
                    receiver:'',
                    address:'',
                    phone:'',
                    time:'',
                    totalPoint: totalPoint
                }}
                onSubmit={(values)=>{
                    values.status = 'loading';
                    values.totalPoint = totalPoint;
                    dispatch(editOrder(values)).then(()=>{
                        let order = {
                            idUser: user.idUser,
                            receiver: user.username,
                            address: 'hd',
                            phone: 0,
                            time: '2023-02-24 00:29:52',
                            totalPoint: 0,
                            status: 'buying'
                        }
                        dispatch(addOrder(order))
                        navigate('/home')
                    })
                }}
            >

                <Form>
                    <Field type="text" name={'receiver'}/>
                    <Field type="text" name={'address'}/>
                    <Field type="text" name={'phone'}/>
                    <Field type="date" name={'time'}/>
                    <button>Buy</button>
                </Form>
            </Formik>
            <br/>

        </>}
</>
    )
}
