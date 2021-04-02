import * as actionTypes from "./actionTypes";

export const loginStart = () => {
    return {
        type: actionTypes.LOGINSTART
    };
};

export const loginsucces = (loginData) => {
    return {
        type: actionTypes.LOGINSUCCESS,
        loginData: loginData
    };
};

export const loginfail = (error) => {
    return {
        type: actionTypes.LOGINFAIL,
        error: error
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginstart());
    };
};