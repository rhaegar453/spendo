import * as actions from './ActionTypes';


export const makeRequestStart=()=>({type:actions.MAKE_REQUEST_START});

export const makeRequestSuccess=(data)=>({type:actions.MAKE_REQUEST_SUCCESS, payload:data});

export const makeRequestFailure=(err)=>({type:actions.MAKE_REQUEST_FAIL, payload:err});


