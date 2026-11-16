function showArray(array) {
    let result = ""
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result
}

function showArrayReverse(array) {
    let result = ""
    for (let i = array.length - 1; i >= 0; i--) {
        result += array[i];
    }
    return result
}


export default showArray
export { showArrayReverse }