const version = '0.1.2';
const minSize = 400;
const pattern = /[1-9]/i;
const start = 0;
const end = 9;

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
 * @returns {number[][]}
 */
function emptyDatalist() {
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
 * @returns {null}
 */
function createTable() {
    let table = document.createElement('table');
    table.classList.add('sudoku9x9');
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
                value = value.length > 1 ? value[0] : value;
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
}

/**
 * @returns {null}
 */
function runClick() {
    document.querySelectorAll('button').forEach(button => button.disabled = true);
    let data = emptyDatalist();
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
    solver(data, 0, 0);
    let endTime = new Date().getTime();
    document.getElementById('info').innerText = `Elapsed: ${(endTime - startTime) / 1000} sec.`;
    document.querySelectorAll('input[type="text"]').forEach(input => {
        let row = Number(input.getAttribute('data-row'));
        let col = Number(input.getAttribute('data-col'));
        input.value = data[row][col];
    });
    document.querySelectorAll('button').forEach(button => button.disabled = false);
}

/**
 * @param {number[][]} data
 * @param {number} row
 * @param {number} col
 * @returns {null|number[]}
 */
function fund_next_cell(data, row, col) {
    for (let line of [[row, col], [0, 0]]) {
        let [x, y] = line;
        for (let r = x; r < end; r++) {
            for (let c = y; c < end; c++) {
                if (data[r][c] === 0) {
                    return [r, c];
                }
            }
        }
    }
    return null;
}

/**
 * @param {number} value
 * @returns {number}
 */
function calc(value) {
    return Math.trunc(value / 3) * 3;
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} value
 * @param {number[][]} data
 * @returns {boolean}
 */
function validate(row, col, value, data) {
    let line = column = true;
    for (let x = start; x < end; x++) {
        if (value === data[row][x]) {
            return false;
        }
    }
    if (line) {
        for (let x = start; x < end; x++) {
            if (value === data[x][col]) {
                return false;
            }
        }
    }
    if (column) {
        let sector_x = calc(row);
        let sector_y = calc(col);
        for (let x = sector_x; x < sector_x + 3; x++) {
            for (let y = sector_y; y < sector_y + 3; y++) {
                if (data[x][y] === value) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}

/**
 * @param {number[][]} data
 * @param {number} row
 * @param {number} col
 * @returns {boolean}
 */
function solver(data, row, col) {
    let line = fund_next_cell(data, row, col);
    if (!line) {
        return true
    }
    [row, col] = line;
    for (let value = start + 1; value <= end; value++) {
        let result = validate(row, col, value, data);
        if (result) {
            data[row][col] = value;
            if (solver(data, row, col)) {
                return true;
            }
            data[row][col] = 0;
        }
    }
    return false;
}


window.onresize = viewPort;


window.onload = function () {
    if (typeof testWindow != null && location.href.endsWith('#tests')) {
        testWindow();
        return
    }
    viewPort();
    showVersion();
    document.querySelector('.reset').addEventListener('click', resetClick);
    document.querySelector('.run').addEventListener('click', runClick);
    createTable();
}