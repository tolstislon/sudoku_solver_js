const version = '0.2.0';
const minSize = 400;
const start = 0;
let defaultSize = 9;

const valueSizes = {
    9: {
        pattern: /[1-9]/,
        cls: 'sudoku9',
        size: 9,
        count: 1
    },
    16: {
        pattern: /[1-9][0-6]?/,
        cls: 'sudoku16',
        size: 16,
        count: 2
    }
}


/**
 * @returns {null}
 */
function showVersion() {
    let span = document.createElement('span');
    span.innerText = `Version: ${version}`;
    span.id = 'version';
    document.body.appendChild(span);
}

/**
 * @param end {number}
 * @returns {number[][]}
 */
function emptyDatalist(end) {
    let data = [];
    for (let i = start; i < end; i++) {
        let row = [];
        for (let h = start; h < end; h++) {
            row.push(0);
        }
        data.push(row);
    }
    return data;
}

/**
 * @param size {number}
 * @returns {null}
 */
function createTable(size) {
    let cls = valueSizes[size].cls;
    let end = valueSizes[size].size;
    let pattern = valueSizes[size].pattern;
    let count = valueSizes[size].count;
    defaultSize = end;

    let table = document.createElement('table');
    table.classList.add(cls);
    let tbody = document.createElement('tbody');
    for (let row = start; row < end; row++) {
        let tr = document.createElement('tr');
        for (let col = start; col < end; col++) {
            let td = document.createElement('td')
            let input = document.createElement('input');
            input.type = 'text';
            input.classList.add(`row-${row}`, `col-${col}`);
            input.setAttribute('data-row', String(row));
            input.setAttribute('data-col', String(col));
            input.addEventListener('input', event => {
                let value = event.target.value;
                value = value.length > count ? value.slice(0, count) : value;
                value = value && !value.match(pattern) ? '' : value;
                event.target.value = value;
            });
            td.appendChild(input);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById('content').appendChild(table);
    document.querySelectorAll('button').forEach(button => button.disabled = false);
}

/**
 * @returns {null}
 */
function viewPort() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let content = document.getElementById('content');
    let size = width >= height ? height : width;
    if (size >= minSize) {
        content.style.width = size * .7 + 'px';
        content.style.height = size * .7 + 'px';
    }
}

/**
 * @returns {null}
 */
function resetClick() {
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
        input.disabled = false;
        input.classList.remove('user');
    });
    document.getElementById('info').innerText = '';
    document.querySelectorAll('button').forEach(button => button.disabled = false);
}

/**
 * @returns {null}
 */
function runClick() {
    document.querySelectorAll('button').forEach(button => button.disabled = true);
    let data = emptyDatalist(defaultSize);
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.disabled = true;
        let value = input.value ? Number(input.value) : 0;
        if (!value) {
            input.classList.add('user');
        }
        let row = Number(input.getAttribute('data-row'));
        let col = Number(input.getAttribute('data-col'));
        data[row][col] = value;
    });


    let startTime = new Date().getTime();
    data = new Solver(data, defaultSize).getResult();
    let endTime = new Date().getTime();
    document.getElementById('info').innerText = `Elapsed: ${(endTime - startTime) / 1000} sec.`;
    document.querySelectorAll('input[type="text"]').forEach(input => {
        let row = Number(input.getAttribute('data-row'));
        let col = Number(input.getAttribute('data-col'));
        input.value = data[row][col];
    });
    document.querySelectorAll('button.reset').forEach(button => button.disabled = false);
}


window.onresize = viewPort;


window.onload = function () {
    viewPort();
    showVersion();
    document.querySelector('.reset').addEventListener('click', resetClick);
    document.querySelector('.run').addEventListener('click', runClick);
    let select = document.querySelector('#sizeSelect');
    select.addEventListener('change', evt => {
        document.querySelector('table').remove();
        createTable(Number(evt.target.value));
    });
    createTable(Number(select.value));
}
