import Phaser from 'phaser'

// generates an array of points between with minimum vSpacing and hSpacing 
export const randomSpacedPositions = (minX, maxX, minY,maxY, count, vSpacing, hSpacing) => {
    // check if enough vertical space is available
    let availableX = maxX - minX - vSpacing * (count - 1)
    if (availableX < 0) return false
    // check if enough horizontal space is available
    let availableY = maxY - minY - vSpacing * (count - 1)
    if (availableY < 0) return false

    let arr = [];
    for (let i = 0; i<count; i++) {
        let tempX = Math.round( Math.random()*availableX )
        let tempY = Math.round( Math.random()*availableY )
        let pos = {x: null, y: null}
        pos.x = ((i==0)? minX+tempX : arr[i-1].x + tempX + vSpacing)
        pos.y = ((i==0)? minY+tempY : arr[i-1].y + tempY + hSpacing)
        availableX -= tempX
        availableY -= tempY
        arr[i] = pos
    }
    return arr;

} 