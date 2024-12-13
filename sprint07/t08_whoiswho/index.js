const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const multer = require('multer');
const session = require('express-session');
let csvArray = [];
let sess;

const app = express();
const port = 3000;

app.use(session({ secret: 'hsjhjgkdfjgksj', saveUninitialized: true, resave: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(__dirname + '/'));
app.use('/js', express.static(__dirname + '/'));
app.use(multer({ dest: "uploads" }).single("file"));

function get(ins = false) {
    try {
        const data = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
        return (data && ins) ? data.replace('#TEXT#', ins) : data.replace("#TEXT#", '');
    } catch (err) {
        console.error(err);
    }
    return false
}

function getFilter(array) {
    let map = new Map();
    for (let key in array[0]) {
        map.set(key, [...new Set(array.map(item => { return item[key] }))].sort());
    }
    return map;
}

function getFilterFromHtml(name, map, filter) {
    let result = `<select name="${name}">${name}`;
    result += `<option value="all-items" ${!filter || filter === 'all-items' ? 'selected' : ''}><b>${name} (all)</b></option>`;
    map.get(name).map(item => {
        result += `<option value="${item}"  ${filter === item ? 'selected' : ''}>${item}</option>`;
    });
    result += `</select>`
    return result
}

function createTable(array, filter = false) {
    let map = getFilter(array);
    let result = '<form action="/filter" id="filters"><table border="1px;"><tr>';
    for (let key in array[0]) {
        result += `<th>${getFilterFromHtml(key, map, filter ? filter[key] : false)}</th>`;
    }
    result += '</tr>';
    if (filter && Object.keys(filter).length !== 0) {
        array = array.filter(item => {
            let flag = true;
            for (let key in item) {
                if (!(filter[key] === item[key] || filter[key] === 'all-items')) {
                    flag = false;
                }
            }
            return flag;
        })
    }
    array.map(item => {
        result += '<tr>';
        for (let key in item) {
            result += `<td>${item[key]}</td>`;
        }
        result += '</tr>'
    });
    result += '</table><button type="submit" id="submit"></button></form>';
    return result;
}

app.get('/', (req, res) => {
    res.send(get())
});

app.post('/', (req, res) => {
    sess = req.session;
    if (!req.file) {
        res.redirect('/')
    } else {
        sess.file = req.file.path;
        let result = '';
        fs.createReadStream(sess.file)
            .pipe(csv())
            .on('data', (data) => csvArray.push(data))
            .on('end', () => {
                result = createTable(csvArray);
                res.send(get(result))
            })
    }

})

app.get('/filter', (req, res) => {
    let result = '';
    fs.createReadStream(sess.file)
        .pipe(csv())
        .on('data', (data) => csvArray.push(data))
        .on('end', () => {
            result = createTable(csvArray, req.query);
            res.send(get(result));
        })
})

app.listen(port,() => {
    console.log(`Server started at http://localhost:${port}`);
});
