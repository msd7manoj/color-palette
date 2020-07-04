import React from 'react';
import { toast  } from 'react-toastify';
import Toaster from '../components/Toaster/Toaster';

export const notification = ( message, position = 'top-center', type = 'success' ) => {
    toast[type](<Toaster msg={message} type={type} />, {
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

export const rgbToCMYK = (rgb, normalized) => {
    let r = rgb[0], g = rgb[1], b = rgb[2];
    var c = 1 - (r / 255);
    var m = 1 - (g / 255);
    var y = 1 - (b / 255);
    var k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    
    // return {
    //     c: c,
    //     m: m,
    //     y: y,
    //     k: k
    // }
    return `cmyk(${c}, ${m}, ${y}, ${k})`
}