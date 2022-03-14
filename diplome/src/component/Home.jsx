import React from 'react';
import Products from './Products';



const Home = () => {
   return(
       <div className="hero">
                    <div className="card bg-dark text-white border-0">
                            <img src="/logo192.png" className="card-img" alt="Backgound" height="550px"  width="400px"/>
                            <div className="card-img-overlay d-flex flex-column justify-content-center">
                                <div className="container">
                                <h5 className="card-title  display-3 fw-bolder mb-0">DAWLENE ARRIVAGE BOU BESS TAK</h5>
                                <p className="card-text lead fs-2">Yeureul seet</p>
                                
                                </div>
                               
                            </div>
                    </div>
                    <Products />
       </div>
   );
}
 
export default Home;