import React, { useState ,useEffect} from 'react';
import Skeleton from 'react-loading-skeleton/dist';
import { NavLink } from 'react-router-dom';


const Products = () => {

         const [data, setData] = useState([]);
         const [filter, setFilter] = useState(data);
         const [loading, setloading] = useState(false);


         let componentMounted = true;


         useEffect(() => {
             const getPorducts = async () => {
                   setloading(true);
                   const response = await fetch("https://fakestoreapi.com/products");
                   console.log(await response.clone().json());
                   if(componentMounted){
                      
                       setData(await response.clone().json());
                       setFilter(await response.json());
                       setloading(false);
                   }

                   return () => {
                       componentMounted = false;
                   }
             }

             getPorducts();
         }, []);

         const Loading = () => {
            return (
                <>
                 <div className="col-md-3">
                    <Skeleton  variant="rectangular"  height={350} />
                 </div> 
                 <div className="col-md-3">
                    <Skeleton height={350} />
                 </div>  
                 <div className="col-md-3">
                    <Skeleton height={350} />
                 </div>  
                 <div className="col-md-3">
                    <Skeleton height={350} />
                 </div>                  
                </>
            );
         }
        
        const filterPrduct = (cat) => {
             const updateList = data.filter((x)=> x.category === cat);
             setFilter(updateList);
        }
         const ProductsComponent = () =>{
             return (
                 <>
                    <div className="buttons d-flex justify-content-center mb-5 pb-5">
                        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterPrduct("men's clothing")}>Homme</button>
                        <button className="btn btn-outline-dark me-2" onClick={()=>filterPrduct("women's clothing")}>Femmme</button>
                        {/* <button className="btn btn-outline-dark me-2" onClick={()=>filterPrduct("jewel")}>Jewlery</button> */}
                        <button className="btn btn-outline-dark me-2"  onClick={()=>filterPrduct("electronics")}>Electronic</button>
                    </div>

                    {filter.map((product)=>{
                        return(
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4"  key={product.id} >
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0 ">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">
                                                ${product.price}
                                            </p>
                                            <NavLink to={`/produit/${product.id}`} className="btn btn-outline-dark">Acheter</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>                            
                        );
                    })}
                 </>
             );
         }
        return (
            <div>
                  <div className="container my-5 py-5" >
                      <div className="row">
                          <div className="col-12">
                              <h1  className='display-6 fw-bolder text-center'>Latest Product</h1>
                              <hr />
                          </div>
                      </div>
                      <Loading/>
                      <div className="row justify-content-center">
                            {loading ? <Loading/> :<ProductsComponent/>}
                      </div>
                  </div>
            </div>
        );
}

export default Products;