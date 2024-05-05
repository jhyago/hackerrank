function simpleArraySum(sizeArr, stringArr) {
    arr = stringArr.split(' ').map(Number)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i] === Number)) {
            sum += arr[i]
        }
    }
    return sum
}

console.log(simpleArraySum(3, '1 3 5'))
