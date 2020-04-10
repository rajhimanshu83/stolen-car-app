import { ADD_USERS,ADD_COMPLAINS, LOAD_COMPLAINS_LOADING, LOAD_COMPLAINS_ERROR, POST_COMPLAIN_SUCCESS, POST_COMPLAIN_FAILURE
, COMPLAIN_STATUS_CHANGE_SUCCESS,ADD_BUSY_USERS, COMPLAIN_STATUS_CHANGE_FAILURE, LOAD_USERS_LOADING, ADD_TOAST, REMOVE_TOAST  } from './types';
import Api from "./Api";

export const addComplains = () => (dispatch: any) => {
    dispatch({ type: LOAD_COMPLAINS_LOADING }); // we can set loading to true if we want to show loading
    Api.getComplains()
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                dispatch({ type: ADD_COMPLAINS, payload: data });
                dispatch(getFreeCops());
                dispatch(getBusyCops());
            },
            (error: any) => dispatch({ type: LOAD_COMPLAINS_ERROR, payload: error || 'Unexpected Error!!!' })
        )
};
export const getFreeCops = () => (dispatch: any) => {
    dispatch({ type: LOAD_USERS_LOADING }); // we can set loading to true if we want to show loading
    Api.getCops()
        .then((response: any) => response.json())
        .then(
            (data: any) => dispatch({ type: ADD_USERS, payload: data }),
            (error: any) => dispatch({ type: LOAD_COMPLAINS_ERROR, payload: error || 'Unexpected Error!!!' })
        )
};

export const getBusyCops = () => (dispatch: any) => {
    Api.getBusyCops()
        .then((response: any) => response.json())
        .then(
            (data: any) => dispatch({ type: ADD_BUSY_USERS, payload: data }),
            (error: any) => dispatch({ type: LOAD_COMPLAINS_ERROR, payload: error || 'Unexpected Error!!!' })
        )
};

export const assignFreeCops = () => (dispatch: any) => {
    Api.assignCops()
        .then((response: any) => response.json())
};

export const postComplains = (complain: any) => (dispatch: any) => {
    Api.postComplains(complain)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                dispatch({ type: POST_COMPLAIN_SUCCESS, payload: "Complain Submitted Successfully" });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: POST_COMPLAIN_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
};


export const complainsStatusChange = (id: string, isCompleted: boolean) => (dispatch: any) => {
    Api.changeComplainStatus(id, isCompleted)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                dispatch({ type: COMPLAIN_STATUS_CHANGE_SUCCESS, payload: null });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: COMPLAIN_STATUS_CHANGE_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
};

export const assignUnassignStatus = (id: string | null, complainId: string | null) => (dispatch: any) => {
    if (id) {
    Api.assignUnassignStatus(id, complainId)
        .then((response: any) => response.json())
        .then(
            (data: any) => {
                // console.log("data", data)
                dispatch({ type: COMPLAIN_STATUS_CHANGE_SUCCESS, payload: null });
                dispatch(addComplains());
            },
            (error: any) => dispatch({ type: COMPLAIN_STATUS_CHANGE_FAILURE, payload: error || 'Unexpected Error!!!' })
        )
    }
};