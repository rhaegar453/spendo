import * as actions from './ActionTypes';

const initialState={
    amount:500, 
    duration:6, 
    loading:false, 
    selectedItem:null,
    data:[],
    err:null
}


const reducer=(state=initialState, action)=>{
    switch(action.type){
        case actions.MAKE_REQUEST_START:
            return {...state, loading:true}
        case actions.MAKE_REQUEST_SUCCESS:
            localStorage.setItem(`${action.payload.amount}&${action.payload.numMonths}`, JSON.stringify(action.payload));
            return{...state, loading:false, selectedItem:action.payload}
        case actions.MAKE_REQUEST_FAIL:
            return {...state, loading:false, err:action.payload}
        case actions.SELECT_ITEM:
            return {...state, loading:false, selectedItem:action.payload}
        case actions.CHANGE_DURATION:
            return {...state, duration:action.payload};
        case actions.CHANGE_LOAN:
            return {...state, amount:action.payload.amount};
        default:
            return {...state}
    }
}

export default reducer;