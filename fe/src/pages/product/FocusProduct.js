import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findByIdProduct} from "../../services/productsService";

export default function FocusProduct(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => {
        return state.products.product
    })
    useEffect(()=>{})
    dispatch(findByIdProduct(id))
    return(
        <>

        </>
    )
}