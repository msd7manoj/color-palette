export function getColorAndWeight(gradient, position, width) {
    let colorRange = []
    gradient.forEach( (value, index) => {
        if( position <= value[0] ) {
            colorRange = [ index-1, index ]
        }
    } )

    //Get the two closest colors
    let firstColor = gradient[colorRange[0]][1];
    let secondColor = gradient[colorRange[1]][1];

    //Calculate ratio between the two closest colors
    let firstcolor_x = width * ( gradient[colorRange[0]][0] / 100);
    let secondcolor_x = width * ( gradient[colorRange[1]][0] / 100)-firstcolor_x;
    let slider_x = width * ( position / 100)-firstcolor_x;
    let ratio = slider_x/secondcolor_x
    

    console.log('position', position)
    console.log('ratio', ratio)
    console.log('firstColor', firstColor)
    console.log('secondColor', secondColor)
    //Get the color with pickHex(thx, less.js's mix function!)
    return pickHex( secondColor, firstColor, ratio );   
}


function pickHex(color1, color2, weight) {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w/1+1) / 2;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}

export const sortArrObjectByVal = (arr, key ) => {
    return arr.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
}
export const getGradientBg = ( bg, rotate = 0, gradientType = 'linear-gradient' ) => {
    let backgroundImage= [];
    let deg = gradientType === 'linear-gradient' ? `${rotate}deg` : 'circle'
    let clonedBg = bg.map(el => ({...el}) )
    sortArrObjectByVal(clonedBg, 'position').forEach( color => {
        backgroundImage.push(`${color.color} ${color.position}%`)
    });


    return `${gradientType}( ${deg}, ${backgroundImage.join(", ")})`;
}
