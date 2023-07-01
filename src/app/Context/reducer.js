
// export const initialState = {
//    slider:false
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_SLIDER':
            {
                return { ...state, slider: !state.slider };
            }

        case 'SET_ALL_PRODUCTS':
            {
                return { ...state, products: [...state.products, action.payload] }
            }

        case 'ADD_TO_CART':
            {
                return { ...state, cart: [...state.cart, action.payload] }
            }
        case 'REMOVE_ITEM':
            {
                const index = state.cart.findIndex(i => i.id === action.payload);
                if (index > -1) {
                    state.cart.splice(index, 1);
                }
                return {...state, cart: state.cart}
            }
    }
}

export default reducer;