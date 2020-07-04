const addZeros = (number, length) => {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

const convertNumToHex = (value) => {
    return addZeros(Math.min(Math.max(Math.round(value), 0), 255).toString(16), 2);
}

const convertHexToRGB = (hex) => {
    return {
        red: parseInt(hex.substr(0, 2), 16),
        green: parseInt(hex.substr(2, 2), 16),
        blue: parseInt(hex.substr(4, 2), 16)
    }
}
const convertRGBToHex = (rgb) => {
    return convertNumToHex(rgb.red) + convertNumToHex(rgb.green) + convertNumToHex(rgb.blue);
}
const tintShadeCalculator = (hex, findShadeTint) => {
    const color = convertHexToRGB(hex);
    const shadesValue = [];
    for (let i = 0; i < 10; i++) {
        shadesValue[i] = convertRGBToHex(findShadeTint(color, i));
    }
    return shadesValue;
}
function getShadesRGB(rgb, i) {
    return {
        red: rgb.red * (1 - 0.1 * i),
        green: rgb.green * (1 - 0.1 * i),
        blue: rgb.blue * (1 - 0.1 * i)
    }
}
const getShades = (hex) => {
    return tintShadeCalculator(hex, getShadesRGB).concat("000000");
}
const getTints = (hex) => {
    return tintShadeCalculator(hex, getShadesRGB).concat("ffffff");
}

export const getTintShades = ( hex ) => {
    const shades = getShades(hex)
    const tints = getTints(hex)
    console.log(shades)
    console.log(tints)
    console.log(new Set([...shades, ...tints]));
}