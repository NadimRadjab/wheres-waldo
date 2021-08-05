

function size() {

    let orgCorX = 346 - 264
    let orgCorY = 859 - 88

    let x = 1617
    let y = 997.65
    let Rx = 778 / x
    let Ry = 480 / y

    return `${(Rx * orgCorX).toFixed()}, ${(Ry * orgCorY).toFixed()}`

}
export default size

