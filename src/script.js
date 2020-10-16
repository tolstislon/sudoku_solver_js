const version = '0.1.1';
const minSize = 400;

/**
 * @returns {null}
 */
function showVersion() {
    let span = document.createElement('span');
    span.innerText = 'Version: ' + version;
    span.id = 'version';
    document.body.appendChild(span);
}

/**
 * @returns {number[][]}
 */
function emptyDatalist() {
    let data = [];
    for (let i = 0; i < 9; i++) {
        let row = [];
        for (let h = 0; h < 9; h++) {
            row.push(0);
        }
        data.push(row);
    }
    return data;
}

/**
 * @returns {null}
 */
function onInput() {
    let value = this.value;
    if (value.length > 1) {
        value = value[0];
    }
    if (value && !value.match(/[1-9]/i)) {
        value = '';
    }
    this.value = value;
}

/**
 * @returns {null}
 */
function createTable() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    for (let row = 0; row < 9; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < 9; col++) {
            let td = document.createElement('td')
            let input = document.createElement('input');
            input.oninput = onInput;
            input.type = 'text';
            input.classList.add('row-' + row, 'col-' + col);
            input.setAttribute('data-row', String(row));
            input.setAttribute('data-col', String(col));
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
    document.getElementById('info').innerText = 'Elapsed: ' + (endTime - startTime) / 1000 + ' sec.';
    document.querySelectorAll('input[type="text"]').forEach(input => {
        let row = Number(input.getAttribute('data-row'));
        let col = Number(input.getAttribute('data-col'));
        input.value = data[row][col];
    });
    document.querySelectorAll('button').forEach(button => button.disabled = false);
}

/**
 *
 * @param {number[][]} data
 * @param {number} row
 * @param {number} col
 * @returns {null|number[]}
 */
function fund_next_cell(data, row, col) {
    for (let line of [[row, col], [0, 0]]) {
        let x = line[0];
        let y = line[1];
        for (let r = x; r < 9; r++) {
            for (let c = y; c < 9; c++) {
                if (data[r][c] === 0) {
                    return [r, c];
                }
            }
        }
    }
    return null;
}

/**
 * @param {number} row
 * @param {number} col
 * @param {number} value
 * @param {number[][]} data
 * @returns {boolean}
 */
function validate(row, col, value, data) {
    let line = true;
    let column = true;
    for (let x = 0; x < 9; x++) {
        if (value === data[row][x]) {
            return false;
        }
    }
    if (line) {
        for (let x = 0; x < 9; x++) {
            if (value === data[x][col]) {
                return false;
            }
        }
    }
    if (column) {
        let sector_x = Math.trunc(row / 3) * 3;
        let sector_y = Math.trunc(col / 3) * 3;
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
    row = line[0];
    col = line[1];
    for (let value = 1; value <= 9; value++) {
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
    document.querySelector('.reset').onclick = resetClick
    document.querySelector('.run').onclick = runClick
    createTable();
}