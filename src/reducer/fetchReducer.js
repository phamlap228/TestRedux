import {FETCH_FAIL,FETCH_OK,FETCHING} from './../actions/type';
const DEFAULT_STATE={
    data:[],
    isFetching:false,
    dataFetched:false,
    isError:false
};
export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case FETCHING:
            return{
                ...state,
                isFetching:true,
                data: [],
            };
        case FETCH_OK:
            return{
                ...state,
                data:action.payload,
                isFetching:false,
                dataFetched:true,
            }
        case FETCH_FAIL:
            return{
                ...state,
                isFetching:false,
                isError:true,
            }
        default:
            return state;
    }
}