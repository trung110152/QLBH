import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findByIdProduct} from "../../services/productsService";
import {addCart, addOrder} from "../../services/orderService";

export default function BuyNow() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState()

    const user = useSelector(state=>{
        return state.user.currentUser
    })
    const product = useSelector(state => {
        return state.products.product
    });
    useEffect(() => {
        dispatch(findByIdProduct(id)).then((value) => {
        });
    }, []);

    const handleBuy = (values)=>{
        let order = {
            idUser: user.idUser,
            time: values.time,
            totalPoint: quantity * product.price,
            status: 'loading',
            receiver: values.receiver,
            address: values.address,
            phone: values.phone
        };

        dispatch(addOrder(order)).then((e)=>{
            let cart = {
                quantity: quantity,
                idProduct: id,
                total: quantity * product.price,
                idOrder: e.payload.id
            };
            dispatch(addCart(cart));
            navigate('/home')

        })
    }

return(
    <>
        <h1>Product</h1>
        <img  src={product.image}></img>
        <p><span>Name</span>{product.name}</p>
        <p><span>Price</span>{product.price}</p>
        <p><span>Total quantity</span>{product.totalQuantity}</p>
        <p><span>Category</span>{product.nameCategory}</p>
        <Formik
            initialValues={{
                receiver:'',
                time:'',
                address:'',
                phone:''
            }}
        onSubmit={(values)=>{
            handleBuy(values);
        }}>
            <Form>
                <span>Quantity</span><input type="number" min={1} onClick={(e)=>{
                    setQuantity(e.target.value)
                }}/>

                <p><span>totalPoint: </span>{quantity * product.price} $</p>
                <Field type={'text'} name={'receiver'} placeholder={'receiver'}/>
                <Field type={'text'} name={'phone'} placeholder={'phone'}/>
                <Field type={'date'} name={'time'}/>
                <Field type={'text'} name={'address'} placeholder={'address'}/>
                <button>Buy now</button>
            </Form>
        </Formik>
    </>
)
}