import {FETCH_FAIL,FETCH_OK,FETCHING} from './type.js';
import API from '../API.js'

export function getData (){
    return{
        type:FETCHING,
    }
}
export function getDataSuccess (data){
    return{
        type:FETCH_OK,
        payload:data,
    }
}
export function getDataFail (){
    return{
        type:FETCH_FAIL,
    }
}
export function fetchDataSuccess(){
    return (dispatch) => {
        dispatch(getData());
        API().then((result) => {
            dispatch(getDataSuccess(result))
        }).catch((err) => {
            dispatch(getDataFail())
        });

    }
}