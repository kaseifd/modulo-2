
function createArray(num) {
    let array10Numbers = []
    for (let i = 1; i <= 10; i++) {
        array10Numbers.push(num)
        num++
    }

    return array10Numbers
}

export default createArray