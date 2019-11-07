import { selectItem, makeRequest } from '../Store/Actions'

// export const cache=({getState, dispatch})=>next=>action=>{
//     if(action.type=='CHECK_CACHE'){
//         console.log(action);
//         let cached=localStorage.getItem(`${action.payload.amount}&${action.payload.numMonths}`);
//         if(cached){
//             next(selectItem(JSON.parse(cached)));
//         }
//         else{
//             console.log("Making the call")
//             let {amount, numMonths}=action.payload;
//             next(action);
//             dispatch(makeRequest({amount, numMonths})); 
//         }
//     }
//     else{
//         console.log(action);
//         next(action);
//     }
// }

export const cache = ({ getState, dispatch }) => next => action => {
    next(action);
    console.log(getState());
    console.log(action);
    if (action.type == 'CHANGE_LOAN' || action.type == 'CHANGE_DURATION') {
        let { amount, duration } = getState();
        let localData = localStorage.getItem(`${amount}&${duration}`);
        if (localData) {
            dispatch(selectItem(JSON.parse(localData)));
        }
        else {
            dispatch(makeRequest({ amount, numMonths:duration }));
        }
    }
}