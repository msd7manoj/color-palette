import React from 'react';
import { toast  } from 'react-toastify';
import Toaster from '../components/Toaster/Toaster';

export const notification = ( message, position = 'top-right', type = 'success' ) => {
    toast[type](<Toaster msg={message} />, {
        hideProgressBar: true, 
        className: 'toastifier',
        position: position,
    });
}


//Normalizing the array
export const normalizeArr = (arr, prop) => {
    return arr.reduce(function (acc, cur, i) {
        acc[cur[prop]] = cur;
        return acc;
    }, {});
}

//Normalizing the object
export const normalizeObj = (obj) => {
    return Object.values(obj)
}

//Mocking API Requeset
export const mockApiReq = (data, ms) => new Promise(res => setTimeout(() => res(data), ms))

export const converColorCodes = ( type, color ) => {
    const validate = color.some( el => isNaN(el) )
    return validate ? '' : `${type}( ${color.join(', ')}  )`
} 

export const copyText = (str) => {
    navigator.clipboard.writeText(str)
}
