import * as actionType from './actionTypes';

export const reportTime = (data) => {
    return {
        type: actionType.RETURN_TIME,
        time: data.time,
        value: data.value
    }
}

export const loading = () => {
    return {
        type: actionType.LOADING
    }
}

export const getTime = () => {
    return dispatch => {
        dispatch(loading());
        const reqInit = {
            method: 'GET',
            mode: 'cors'
        }
        fetch('http://localhost:8080/api', reqInit).then(resp => resp.json())
            .then( obj => {
                console.log(obj);
                const now = new Date().toLocaleTimeString();
                const data = {
                    time: now,
                    value: obj.time
                };
                dispatch(reportTime(data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}