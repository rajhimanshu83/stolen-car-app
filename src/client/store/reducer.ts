import {ADD_BUSY_USERS, ADD_USERS,ADD_COMPLAINS, LOAD_COMPLAINS_LOADING, LOAD_COMPLAINS_ERROR, POST_COMPLAIN_SUCCESS, POST_COMPLAIN_FAILURE,
    COMPLAIN_STATUS_CHANGE_FAILURE, COMPLAIN_STATUS_CHANGE_SUCCESS } from './types';

interface InitialState {
    complains: any[];
    users: any[];
    busyUsers:any[];
    loading: boolean;
    error: any;
    postComplainError: any;
    postComplainSuccess: any;
}

export const initialState: InitialState = {
    complains: [],
    users: [],
    busyUsers: [],
    loading: false,
    error: null,
    postComplainError: null,
    postComplainSuccess: null,
};

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case LOAD_COMPLAINS_LOADING:
            return {
                ...state,
                loading: true
            }
        case LOAD_COMPLAINS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_BUSY_USERS:
                let busyUsers: any[] = [];
                if (action.payload && action.payload.length) {
                    if(Array.isArray(action.payload)) {
                        busyUsers = action.payload;
    
                    }
                    // users = action.payload.reduce((acc: any, value: any) => {
                    //     let obj: any = {};
                    //     obj["users"] = Object.assign({
                    //         id: value._id,
                    //         name: value.name,
                    //     });
                    //     if (value.officer_user_id) {
                    //         obj["officerAssigned"] = Object.assign({
                    //             officerName: value.officer_name,
                    //             officerEmail: value.officer_email,
                    //             officerStatus: value.officer_status,
                    //             officerUserId: value.officer_user_id,
                    //         });
                    //     } else {
                    //         obj["officerAssigned"] = null;
                    //     }
    
                    //     acc.push(obj)
                    //     return acc;
                    // }, []);
                }
                return {
                    ...state,
                    loading: false,
                    busyUsers: [ ...busyUsers ]
                }
        case ADD_USERS:
            let users: any[] = [];
            if (action.payload && action.payload.length) {
                if(Array.isArray(action.payload)) {
                    users = action.payload;

                }
                // users = action.payload.reduce((acc: any, value: any) => {
                //     let obj: any = {};
                //     obj["users"] = Object.assign({
                //         id: value._id,
                //         name: value.name,
                //     });
                //     if (value.officer_user_id) {
                //         obj["officerAssigned"] = Object.assign({
                //             officerName: value.officer_name,
                //             officerEmail: value.officer_email,
                //             officerStatus: value.officer_status,
                //             officerUserId: value.officer_user_id,
                //         });
                //     } else {
                //         obj["officerAssigned"] = null;
                //     }

                //     acc.push(obj)
                //     return acc;
                // }, []);
            }
            return {
                ...state,
                loading: false,
                users: [ ...users ]
            }
            case ADD_COMPLAINS:

                let complains: any[] = [];
                if (action.payload && action.payload.length) {
                    // console.log(action.payload);
                    complains = action.payload.reduce((acc: any, value: any) => {
                        let obj: any = {};
                        obj["complains"] = Object.assign({
                            id: value._id,
                            carModel: value.car_model,
                            notes: value.notes,
                            isCompleted: value.is_completed,
                            customerName: value.customer_name,
                            customerPhoneNumber: value.customer_phone_number,
                            createdAt: value.created_at,
                            assignedTo:value.assignedTo
                        });
    
                        if (value.assignedTo) {
                            obj["officerAssigned"] = Object.assign({
                                officerName: value.officer_name,
                                officerEmail: value.officer_email,
                                officerStatus: value.officer_status,
                                officerUserId: value.assignedTo || null,
                            });
                        } else {
                            obj["officerAssigned"] = null;
                        }
    
                        acc.push(obj)
                        return acc;
                    }, []);
                }
                // console.log("complains", complains);
    
                return {
                    ...state,
                    loading: false,
                    complains: [ ...complains ]
                }
        case POST_COMPLAIN_SUCCESS:
            return {
                ...state,
                postComplainSuccess: action.payload
            }
        case POST_COMPLAIN_FAILURE:
            return {
                ...state,
                postComplainError: action.payload
            }
        case COMPLAIN_STATUS_CHANGE_SUCCESS:
            return {
                ...state,
            }
        case COMPLAIN_STATUS_CHANGE_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    };
};