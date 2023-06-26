
export const initialState = {
   slider:false
}

const reducer = (state,action)=>{
    if(action.type==='SHOW_SLIDER'){
        return {...state,slider:!state.slider};
    }
}

export default reducer;