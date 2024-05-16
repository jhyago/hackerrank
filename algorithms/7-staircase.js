'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
    if (n <= 0 || n > 100) return;

    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashtags = '#'.repeat(i);
        console.log(spaces + hashtags);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
