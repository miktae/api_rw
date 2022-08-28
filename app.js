const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
let data = fs.readFileSync('engDict.txt', 'utf-8');
const startWords = new Array();
const w = new Array(7000).fill(0).map(() => new Array().fill(0));
const pr = new Array();
const proun = new Array(10).fill(0).map(() => new Array().fill(0));
const t = new Array();
const type = new Array(10).fill(0).map(() => new Array().fill(0));
let typeCount = 0;
const m = new Array();
const meaning = new Array(10).fill(0).map(() => new Array().fill(0));
let meaningCount = 0;
const e = new Array();
const example = new Array(10).fill(0).map(() => new Array().fill(0));
let exampleCount = 0;

// start 
for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
        case '@':
            {
                startWords.push(i)
            }
        case '/':
            {
                pr.push(i)
            }
        case '*':
            {
                t.push(i)
                typeCount++;
            }
        case '-':
            {
                m.push(i)
                meaningCount++;
            }
        case '+':
            {
                e.push(i)
                exampleCount++;
            }
        default: {
            // log
        }
    }
}

// console.log(startWords.length)
// Add words
for (let i = 0; i < 7000; i++)
    for (let j = startWords[i] + 1; j < startWords[i + 1]; j++) {
        w[i].push(data[j])
    }


app.get('/word/:id', (req, res) => {
    res.send(w[req.params.id])
})

app.get('/proun/:id', (req, res) => {
    res.send(proun)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})