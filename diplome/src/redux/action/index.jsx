export const addPanier = (product)=>{
     return {
         type : "ADDPANIER",
         payload : product
     }
}


export const deletePanier = (product)=>{
    return {
        type : "DELETEPANIER",
        payload : product
    }
}