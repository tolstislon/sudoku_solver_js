class Solver {

    /**
     * @param data {number[][]}
     * @param size {number}
     */
    constructor(data, size = 9) {
        this.dataset = data;
        this.size = size;
        this.cells = Math.sqrt(size);
    }

    /**
     * @param row {number}
     * @param col {number}
     * @return {null|*[]}
     */
    #fund_next_cell(row, col) {
        for (let line of [[row, col], [0, 0]]) {
            let [x, y] = line;
            for (let r = x; r < this.size; r++) {
                for (let c = y; c < this.size; c++) {
                    if (this.dataset[r][c] === 0) {
                        return [r, c];
                    }
                }
            }
        }
        return null;
    }

    /**
     * @param value {number}
     * @return {number}
     */
    #calc(value) {
        return Math.trunc(value / this.cells) * this.cells;
    }

    /**
     * @param row {number}
     * @param col {number}
     * @param value {number}
     * @return {boolean}
     */
    #validate(row, col, value) {
        for (let x = 0; x < this.size; x++) {
            if (value === this.dataset[row][x]) {
                return false;
            }
        }
        for (let x = 0; x < this.size; x++) {
            if (value === this.dataset[x][col]) {
                return false;
            }
        }
        let sector_x = this.#calc(row);
        let sector_y = this.#calc(col);
        for (let x = sector_x; x < sector_x + this.cells; x++) {
            for (let y = sector_y; y < sector_y + this.cells; y++) {
                if (this.dataset[x][y] === value) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * @param row {number}
     * @param col {number}
     * @return {boolean}
     */
    #solver(row = 0, col = 0) {
        let line = this.#fund_next_cell(row, col);
        if (!line) {
            return true
        }
        [row, col] = line;
        for (let value = 1; value <= this.size; value++) {
            let result = this.#validate(row, col, value);
            if (result) {
                this.dataset[row][col] = value;
                if (this.#solver(row, col)) {
                    return true;
                }
                this.dataset[row][col] = 0;
            }
        }
        return false;
    }

    /**
     * @return {number[][]}
     */
    getResult() {
        this.#solver();
        return this.dataset;
    }


}