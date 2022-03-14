import React from 'react';
import { useSelector } from 'react-redux';


const ProductLine = (props) =>{
     const product = props.product;
     return( 
           <div className="row" key={product.id}>
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


                 </div>
           </div>
);
}

const Panier = () => {
      const state = useSelector((state) => state.handlePanier);

      const products = state;




      return (
            <>
                  <div>
                        {products.map((product) => {

                              return (
                                    <>

                                          <ProductLine  product={product} />

                                    </>
                              );


                        })}
                  </div>



            </>
      );
}

export default Panier;