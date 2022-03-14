const panier = [];


const handlePanier = (state = panier , action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDPANIER":
            const checkExist = state.find((x)=> x.id === product.id);

            if(checkExist){
                return state.map((x)=> x.id === product.id ? {...x, qt:x.qt + 1} : x);
            }else{
                return[
                    ...state,{
                        ...product,qt : 1
                    }
                ]
            }
            
            break;

        case "DELETEPANIER":
            const checkExists = state.find((x)=> x.id === product.id);

             if(checkExists.qt === 1){
                   return state.filter((x)=>x.id === product.id);
             }else{
                return state.map((x)=> x.id === product.id ? {...x, qt:x.qt - 1} : x);
             }
        
            break;
            
    
        default:
            return state;
            break;
    }
}

export default handlePanier;