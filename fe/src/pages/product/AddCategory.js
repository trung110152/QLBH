import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {addCategory, getCategory} from "../../services/categoruService";
import swal from "sweetalert";
import button from "bootstrap/js/src/button";
import {deleteProduct} from "../../services/productsService";




export default function AddCategory() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const category = useSelector(state =>{
        return state.categories.category
    })


    useEffect(()=>{
        dispatch(getCategory())
    },[]);



    return (
        <>
            <div className="row">
                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Add Category</h1>
                    <Formik
                        initialValues={{
                            name: '',
                        }}
                        onSubmit={(values) => {
                            dispatch(addCategory(values)).then(()=>{

                                swal("Added new category success!", {
                                    icon: "success",
                                })
                                navigate('/home/add-category')

                            })
                        }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Name Category</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'name'}/>
                            </div>
                            <button style={{marginBottom:50}} type="submit" className="btn btn-outline-primary">Add</button>
                        </Form>
                    </Formik>
                </div>
            </div>
                {/*list Category*/}
            <div className="mb-3 tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="ALL" role="tabpanel">
                    <div className="tab-single">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-striped" border={1}>
                                    <thead style={{width:100}}>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Name Category</th>
                                    </tr>
                                    </thead>
                                    {
                                        category.map((product,ind)=>(
                                            <tr>
                                                <th scope="col">{ind+1}</th>
                                                <th scope="col">{product.name}</th>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}