
import React ,{useEffect,useState} from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {addPanier} from '../redux/action/index'
import { useParams } from "react-router-dom"; 


const Product = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const [loading, setLoading] = useState(false);

   const  dispath = useDispatch();

    const addProduitToPanier = (product) =>{
        dispath(addPanier(product));
    }

    useEffect(() => {
        setLoading(true);
        const getProduct = async () =>{
            const response  = await fetch(`https://fakestoreapi.com/products/${id}`);
           
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const ShowProduct = () =>{
       return (
            <>
              
                   <div className="col-md-6">
                          <img src={product.image} alt={product.title} height="400px" width="400px" />
                   </div> 
                   <div className="col-md-6">
                       <h4 className="text-uppercase text-black-50">
                           {product.category}
                       </h4>
                       <h1 className="display-5">{product.title}</h1>
                       <p className="lead fw-bolder">
                           Note {product.rating && product.rating.rate}
                           <i className="fa fa-start"></i>
                       </p>
                       <h3 className="display-6 fw-bold my-4 ">
                           {product.price} $
                       </h3>
                       <p className="lead">{product.description}</p>
                       <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduitToPanier(product)}>Ajouter au Panier</button>
                       <NavLink to="/panier" className="btn btn-outline-dark ms-2 px-3 py-2">Voir Panier</NavLink>
                       
                   </div>
              
            </>
       );
    }


    const Loading = () =>{
        return (
            <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div> 
             <div className="col-md-6">
             <Skeleton height={400}/>
             </div>
            </>
       );
    }


    return  (
        <div className="container py-5">
            <div className="row py-4">
            {loading ? <Loading/> :<ShowProduct/>}
            </div>
        </div>
    );

}

export default Product;