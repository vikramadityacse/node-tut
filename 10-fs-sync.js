// File Sync
const {readFileSync, writeFileSync } = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')  // 2 paramenters one is source and second is emcoding
const sencond = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result :${first}, ${sencond}`,
    {flag: 'a'}
)

console.log('done with this task')

console.log('starting the next one')