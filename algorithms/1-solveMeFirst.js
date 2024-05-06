process.stdin.resume()
process.stdin.setEncoding('utf-8')

let input_stdin = ""
let input_stdin_array = ""
let input_currentLine = 0

process.stdin.on('data', (data) => {
    input_stdin += data
})

process.stdin.on('end', () => {
    input_stdin_array = input_stdin.split("\n")
    main() 
})

function readLine() {
    return input_stdin_array[input_currentLine++]
}

function solveMeFirst( a, b) {
    return a + b
}

function main() {
    let a = parseInt(readLine())
    let b = parseInt(readLine())

    const res = solveMeFirst(a, b)
    console.log(res)
}