const fibonacci = (num) => {
    let initArray = [0,1]
    if (num > 1) {
    for (let i = 2 ; i <= num; i++) {
        initArray.push(initArray[i-1]+initArray[i-2])
    }
}
return initArray[num] 
}

module.exports = {fibonacci}
