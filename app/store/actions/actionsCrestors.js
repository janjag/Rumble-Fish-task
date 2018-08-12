import * as actionType from './actionTypes';
import axios from 'axios';

export const reportTime = (data) => {
    return {
        type: actionType.RETURN_TIME,
        time: data.time,
        value: data.value
    }
}

export const getTime = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            }
        }).then(response => {
                // handle success
                const now = new Date().toLocaleTimeString();
                const data = {
                    time: now,
                    value: response.data.time
                };
                return data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then( data => {
                dispatch(reportTime(data));
            });
    }
}