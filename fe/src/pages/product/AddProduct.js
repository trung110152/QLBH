import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {addProduct, getProducts} from "../../services/productsService";
import {useEffect, useState} from "react";
import {storage} from "../../services/firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {getCategory} from "../../services/categoruService";
import Navbar from "../../components/Navbar";



export default function AddProduct() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(state => {
        return state.user.currentUser
    })
    const category = useSelector(state =>{
    return state.categories.category
    })


    useEffect(()=>{
        dispatch(getCategory())
    },[]);


    const handleAdd = async (values) => {
        let data = {...values, user: user.idUser};
        await dispatch(addProduct(data));
        await navigate('/home')
    }

    const [images, setImages] = useState([]);

    const [urls, setUrls] = useState([]);

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }
    };



    const handleUpload = () => {
        const promises = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                promises.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }
        Promise.all(promises)
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));

    }


    return (
            <Navbar></Navbar>,
        <>
            <section className="hero-slider">
                <div className="single-slider">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-9 offset-lg-3 col-12">
                                <div className="text-inner">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="hero-text">
                                                <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                                                <p>Maboriosam in a nesciung eget magnae dapibus disting tloctio in
                                                    the find it pereri  odiy maboriosm.</p>
                                                <div className="button">
                                                    <Link to="#" className="btn">Shop Now!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="row">
                <div className="offset-3 col-6 mt-5">
                    <h1 style={{textAlign: 'center'}}>Add blog</h1>
                    <Formik
                        initialValues={{
                            content: '',
                            status: '',
                            date: '',
                            idCategory: ''
                        }}
                        onSubmit={(values) => {
                            values.image = urls[0]
                            handleAdd(values)
                        }}>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Content</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'content'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Status</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'status'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Date</label>
                                <Field type="text" className="form-control" id="exampleInput" name={'date'}/>
                            </div>
                            <div className="ml-3 form-group">
                                <label htmlFor="exampleInputPassword">Image</label>
                                <br/>
                                {urls.map(item => (
                                    <>
                                        <img src={item} alt="" style={{width: 50}}/></>
                                ))}
                                <br/>
                                <input type='file' onChange={handleChange}>
                                </input>
                                <button className="btn btn-outline-success" style={{marginRight: 10}} type='button'
                                        onClick={handleUpload}>Up
                                </button>

                            </div>
                            <div className="mb-3">
                                <Field as='select' name={'idCategory'}>
                                    {category !== undefined && category.map((item)=>(
                                        <option value={item.id}>{item.name}</option>
                                    ))

                                    }
                                </Field>
                            </div>
                            <button style={{marginBottom:50}} type="submit" className="btn btn-primary">Add</button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>
    )
}