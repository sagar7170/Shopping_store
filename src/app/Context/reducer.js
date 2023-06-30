
// export const initialState = {
//    slider:false
// }

const reducer = (state,action)=>{
    switch(action.type){
        case 'SHOW_SLIDER':
    {
        return {...state,slider:!state.slider};
    }
    
    case 'SET_ALL_PRODUCTS':
        {
            return {...state,products:[...state.products,action.payload]}
        }
   
    case 'ADD_TO_CART':
        {
            return {...state,cart:[...state.cart,action.payload]}
        }    
}
}

export default reducer;