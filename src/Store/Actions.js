import * as actions from './ActionTypes';
import axios from 'axios';

let url = 'https://ftl-frontend-test.herokuapp.com/interest?'

export const makeRequestStart = ({ amount, numMonths }) => {
    return { type: actions.MAKE_REQUEST_START, payload: { amount, numMonths } }
};

export const makeRequestSuccess = (data, req) => {
    console.log(data);
    return { type: actions.MAKE_REQUEST_SUCCESS, payload: { ...data, ...req } }
};

export const makeRequestFailure = (err) => ({ type: actions.MAKE_REQUEST_FAIL, payload: err });

export const selectItem = (item) => ({ type: actions.SELECT_ITEM, payload: item });

export const makeRequest = ({ amount, numMonths }) => {
    return dispatch => {
        dispatch(makeRequestStart({ amount, numMonths }));
        axios.get(url + `amount=${amount}&numMonths=${numMonths}`)
            .then(data => {
                console.log(data.data);
                dispatch(makeRequestSuccess(data.data, { amount, numMonths }));
            })
            .catch(err => {
                console.log(err);
                dispatch(makeRequestFailure(err));
            });
    }
}

export const checkCache=({amount, numMonths})=>{
    return {type:actions.CHECK_CACHE, payload:{amount, numMonths}};
}