const dataset = [
    {
        "task": [
            [0, 3, 6, 0, 4, 5, 1, 9, 0],
            [0, 0, 1, 7, 9, 6, 2, 0, 3],
            [0, 2, 0, 0, 3, 8, 4, 6, 7],
            [3, 0, 2, 9, 6, 7, 8, 0, 1],
            [1, 6, 8, 0, 0, 3, 0, 7, 9],
            [0, 7, 9, 8, 5, 0, 3, 2, 6],
            [6, 8, 0, 0, 1, 2, 0, 3, 4],
            [5, 9, 0, 6, 0, 0, 7, 1, 2],
            [2, 1, 4, 3, 7, 9, 0, 0, 0]
        ],
        "level": 1
    },
    {
        "task": [
            [9, 6, 0, 3, 5, 8, 0, 1, 4],
            [5, 8, 4, 6, 0, 2, 0, 7, 0],
            [3, 0, 1, 9, 7, 0, 5, 0, 0],
            [0, 7, 3, 0, 8, 9, 6, 5, 1],
            [6, 0, 8, 7, 3, 1, 0, 4, 2],
            [2, 1, 9, 0, 4, 0, 8, 0, 7],
            [1, 4, 2, 8, 6, 0, 0, 9, 0],
            [7, 3, 0, 4, 9, 5, 1, 2, 0],
            [0, 0, 5, 1, 0, 7, 4, 6, 3]
        ],
        "level": 1
    },
    {
        "task": [
            [9, 7, 2, 0, 4, 8, 3, 0, 6],
            [4, 0, 6, 5, 3, 2, 9, 7, 0],
            [0, 3, 5, 0, 0, 7, 1, 4, 2],
            [0, 0, 0, 7, 0, 5, 2, 8, 0],
            [7, 0, 4, 3, 8, 0, 5, 6, 1],
            [6, 5, 8, 0, 2, 1, 7, 3, 0],
            [2, 0, 0, 8, 5, 3, 0, 0, 7],
            [5, 4, 1, 9, 7, 0, 0, 2, 3],
            [3, 8, 7, 0, 1, 4, 6, 9, 0]
        ],
        "level": 1
    },
    {
        "task": [
            [0, 3, 2, 0, 8, 0, 9, 5, 4],
            [7, 8, 9, 4, 0, 5, 1, 0, 2],
            [0, 5, 1, 2, 9, 3, 6, 7, 0],
            [2, 0, 5, 7, 1, 0, 3, 4, 9],
            [0, 1, 8, 6, 3, 0, 7, 2, 5],
            [3, 4, 0, 5, 2, 9, 0, 0, 1],
            [0, 9, 4, 8, 0, 6, 2, 1, 3],
            [1, 7, 3, 9, 0, 2, 0, 8, 0],
            [8, 0, 0, 0, 0, 1, 5, 9, 7]
        ],
        "level": 1
    },
    {
        "task": [
            [0, 1, 5, 0, 2, 3, 8, 6, 0],
            [8, 0, 0, 6, 0, 1, 4, 0, 5],
            [7, 3, 6, 0, 4, 5, 0, 9, 2],
            [1, 8, 7, 5, 6, 0, 3, 2, 0],
            [5, 0, 9, 2, 3, 4, 0, 0, 1],
            [3, 2, 0, 7, 1, 0, 9, 5, 6],
            [2, 5, 1, 0, 8, 0, 6, 4, 9],
            [6, 7, 8, 4, 9, 2, 0, 0, 3],
            [0, 0, 0, 1, 0, 6, 2, 7, 8]
        ],
        "level": 1
    },
    {
        "task": [
            [0, 5, 7, 3, 0, 0, 6, 0, 4],
            [4, 0, 1, 0, 9, 5, 8, 7, 2],
            [0, 6, 9, 7, 2, 0, 0, 3, 0],
            [1, 4, 0, 0, 0, 8, 0, 2, 5],
            [5, 0, 0, 4, 6, 7, 0, 1, 8],
            [0, 0, 8, 1, 5, 2, 4, 6, 9],
            [7, 2, 0, 0, 0, 6, 9, 4, 3],
            [0, 0, 3, 2, 4, 9, 1, 5, 7],
            [9, 1, 4, 5, 7, 3, 2, 0, 0]
        ],
        "level": 1
    },
    {
        "task": [
            [0, 9, 0, 0, 4, 2, 7, 0, 6],
            [2, 0, 1, 6, 9, 3, 8, 5, 0],
            [8, 6, 4, 0, 1, 5, 9, 2, 0],
            [9, 3, 6, 5, 0, 7, 0, 4, 2],
            [1, 4, 0, 2, 3, 9, 5, 0, 0],
            [7, 0, 2, 4, 6, 0, 0, 9, 8],
            [0, 0, 9, 3, 2, 6, 0, 7, 1],
            [4, 0, 7, 1, 0, 8, 0, 3, 9],
            [6, 0, 0, 9, 7, 0, 2, 8, 5]
        ],
        "level": 1
    },
    {
        "task": [
            [5, 1, 0, 4, 9, 6, 8, 3, 0],
            [0, 4, 8, 1, 2, 7, 0, 5, 0],
            [0, 0, 9, 8, 0, 0, 7, 1, 4],
            [8, 9, 0, 2, 0, 1, 5, 0, 3],
            [0, 3, 1, 9, 5, 0, 2, 7, 6],
            [0, 7, 5, 3, 6, 4, 9, 8, 0],
            [7, 8, 0, 6, 1, 9, 0, 2, 5],
            [1, 6, 3, 0, 8, 2, 4, 0, 7],
            [9, 0, 2, 0, 4, 0, 1, 6, 8]
        ],
        "level": 1
    },
    {
        "task": [
            [5, 7, 0, 8, 3, 6, 1, 0, 9],
            [6, 1, 0, 5, 2, 0, 0, 7, 8],
            [0, 0, 9, 1, 0, 4, 3, 6, 5],
            [0, 3, 0, 2, 9, 8, 5, 1, 7],
            [7, 9, 1, 0, 4, 0, 6, 0, 2],
            [8, 2, 0, 6, 1, 7, 9, 4, 0],
            [1, 6, 8, 7, 0, 0, 0, 9, 4],
            [0, 0, 2, 0, 8, 1, 7, 3, 0],
            [3, 4, 7, 9, 6, 0, 0, 5, 1]
        ],
        "level": 1
    },
    {
        "task": [
            [3, 9, 7, 4, 8, 0, 0, 2, 1],
            [2, 0, 5, 0, 1, 7, 8, 3, 4],
            [0, 8, 1, 0, 2, 3, 7, 0, 9],
            [0, 5, 2, 7, 3, 0, 6, 4, 0],
            [6, 4, 0, 8, 5, 1, 3, 0, 2],
            [8, 7, 3, 0, 6, 4, 1, 0, 5],
            [5, 3, 0, 1, 9, 0, 4, 8, 0],
            [0, 0, 4, 6, 0, 8, 2, 5, 3],
            [7, 2, 8, 3, 0, 5, 0, 1, 6]
        ],
        "level": 1
    },
    {
        "task": [
            [2, 0, 7, 1, 0, 5, 9, 0, 0],
            [8, 0, 0, 2, 9, 6, 1, 0, 0],
            [9, 1, 5, 0, 3, 0, 0, 0, 0],
            [5, 0, 0, 8, 0, 0, 0, 6, 0],
            [0, 0, 6, 0, 4, 9, 8, 7, 5],
            [0, 4, 0, 0, 5, 7, 0, 9, 1],
            [0, 9, 1, 4, 0, 0, 5, 3, 2],
            [4, 5, 0, 0, 1, 3, 0, 8, 6],
            [6, 8, 0, 5, 0, 0, 0, 0, 9]
        ],
        "level": 2
    },
    {
        "task": [
            [6, 8, 0, 0, 9, 1, 0, 3, 0],
            [9, 0, 0, 7, 0, 8, 0, 6, 2],
            [5, 3, 7, 2, 6, 0, 0, 1, 0],
            [3, 0, 0, 9, 0, 7, 6, 0, 1],
            [2, 0, 6, 0, 0, 0, 7, 0, 3],
            [0, 7, 0, 6, 2, 3, 8, 0, 5],
            [0, 2, 0, 4, 0, 6, 3, 7, 0],
            [8, 0, 3, 1, 7, 0, 2, 5, 0],
            [0, 6, 9, 0, 5, 2, 0, 0, 4]
        ],
        "level": 2
    },
    {
        "task": [
            [7, 5, 2, 9, 0, 0, 0, 1, 0],
            [0, 0, 0, 5, 0, 1, 8, 2, 9],
            [0, 0, 1, 2, 4, 0, 5, 0, 7],
            [0, 7, 3, 6, 0, 0, 1, 0, 0],
            [2, 0, 4, 0, 1, 0, 7, 9, 5],
            [1, 9, 0, 0, 0, 0, 0, 8, 6],
            [5, 0, 0, 3, 9, 7, 4, 6, 0],
            [6, 1, 9, 0, 0, 0, 0, 7, 0],
            [0, 0, 7, 1, 6, 2, 9, 0, 8]
        ],
        "level": 2
    },
    {
        "task": [
            [4, 0, 0, 5, 6, 7, 9, 8, 0],
            [0, 5, 8, 0, 0, 0, 6, 3, 7],
            [2, 0, 6, 0, 3, 0, 0, 5, 0],
            [0, 9, 3, 1, 0, 5, 7, 0, 6],
            [0, 1, 0, 6, 9, 0, 8, 4, 0],
            [6, 2, 4, 7, 0, 0, 0, 9, 1],
            [5, 0, 2, 9, 1, 4, 0, 0, 8],
            [0, 4, 0, 3, 0, 8, 0, 6, 9],
            [3, 0, 9, 0, 0, 6, 4, 0, 5]
        ],
        "level": 2
    },
    {
        "task": [
            [2, 0, 5, 8, 4, 1, 0, 0, 3],
            [4, 3, 0, 7, 0, 0, 0, 5, 8],
            [0, 9, 8, 0, 6, 3, 1, 4, 0],
            [5, 1, 0, 0, 0, 6, 7, 0, 4],
            [9, 2, 0, 0, 0, 8, 3, 1, 6],
            [8, 0, 6, 1, 3, 7, 0, 2, 0],
            [6, 5, 9, 0, 7, 0, 8, 0, 0],
            [0, 0, 2, 6, 1, 0, 4, 9, 7],
            [0, 0, 4, 3, 8, 9, 2, 0, 5]
        ],
        "level": 2
    },
    {
        "task": [
            [4, 0, 3, 9, 2, 8, 7, 0, 0],
            [5, 8, 0, 7, 0, 0, 1, 2, 9],
            [0, 7, 0, 0, 1, 6, 4, 3, 0],
            [0, 0, 5, 0, 7, 1, 2, 0, 4],
            [1, 0, 7, 2, 0, 0, 8, 6, 3],
            [2, 3, 9, 6, 0, 4, 0, 7, 0],
            [0, 9, 0, 4, 6, 2, 0, 8, 0],
            [3, 0, 0, 8, 9, 7, 6, 0, 2],
            [6, 2, 8, 0, 0, 0, 0, 4, 7]
        ],
        "level": 2
    },
    {
        "task": [
            [5, 0, 6, 9, 4, 1, 7, 0, 0],
            [9, 4, 0, 3, 0, 0, 1, 8, 6],
            [0, 2, 0, 0, 6, 7, 5, 9, 0],
            [0, 0, 9, 0, 3, 5, 8, 0, 7],
            [2, 0, 5, 4, 0, 0, 9, 6, 1],
            [4, 7, 8, 6, 0, 9, 0, 3, 0],
            [0, 5, 0, 1, 8, 4, 0, 7, 0],
            [7, 0, 0, 5, 2, 6, 3, 0, 8],
            [8, 6, 1, 0, 0, 0, 0, 5, 2]
        ],
        "level": 2
    },
    {
        "task": [
            [3, 5, 0, 0, 4, 7, 0, 6, 0],
            [4, 0, 0, 3, 0, 9, 0, 7, 1],
            [2, 7, 1, 5, 8, 0, 0, 9, 0],
            [8, 0, 0, 7, 0, 4, 2, 0, 5],
            [7, 0, 4, 0, 0, 0, 6, 0, 9],
            [0, 2, 0, 6, 1, 3, 7, 0, 8],
            [0, 4, 0, 2, 0, 5, 9, 8, 0],
            [6, 0, 2, 9, 7, 0, 4, 5, 0],
            [0, 9, 3, 0, 6, 8, 0, 0, 7]
        ],
        "level": 2
    },
    {
        "task": [
            [4, 3, 0, 0, 5, 6, 9, 0, 0],
            [0, 0, 5, 0, 0, 7, 3, 4, 2],
            [7, 2, 0, 3, 0, 0, 0, 8, 5],
            [0, 0, 6, 5, 1, 3, 4, 2, 0],
            [3, 5, 0, 0, 2, 9, 0, 0, 6],
            [2, 0, 1, 7, 0, 0, 0, 3, 9],
            [5, 0, 0, 9, 0, 4, 1, 6, 0],
            [8, 1, 3, 6, 0, 5, 2, 0, 0],
            [0, 9, 0, 1, 8, 0, 7, 0, 3]
        ],
        "level": 2
    },
    {
        "task": [
            [3, 0, 4, 8, 6, 0, 0, 0, 2],
            [6, 5, 7, 0, 0, 0, 9, 3, 0],
            [0, 0, 2, 7, 9, 0, 0, 0, 6],
            [9, 0, 0, 0, 8, 7, 1, 6, 4],
            [0, 6, 0, 4, 0, 2, 3, 0, 7],
            [0, 7, 1, 0, 3, 6, 8, 0, 0],
            [0, 0, 9, 0, 4, 8, 6, 7, 3],
            [7, 4, 0, 0, 5, 9, 0, 8, 0],
            [2, 0, 8, 6, 0, 1, 0, 0, 9]
        ],
        "level": 2
    },
    {
        "task": [
            [3, 0, 8, 0, 0, 5, 7, 0, 0],
            [0, 4, 0, 9, 8, 0, 2, 0, 0],
            [0, 0, 0, 3, 0, 4, 9, 6, 8],
            [0, 0, 5, 4, 0, 0, 0, 2, 0],
            [4, 8, 0, 5, 0, 0, 6, 0, 0],
            [9, 0, 0, 0, 1, 7, 0, 4, 0],
            [8, 0, 9, 0, 0, 0, 3, 5, 2],
            [0, 5, 0, 1, 3, 8, 0, 0, 0],
            [6, 0, 0, 0, 5, 9, 0, 8, 0]
        ],
        "level": 3
    },
    {
        "task": [
            [9, 2, 0, 0, 1, 6, 0, 0, 7],
            [0, 0, 0, 0, 7, 3, 0, 8, 0],
            [0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 6, 0, 0, 0, 0, 0, 2, 4],
            [7, 0, 0, 1, 0, 4, 9, 5, 0],
            [0, 4, 9, 0, 2, 8, 6, 0, 0],
            [0, 9, 0, 6, 8, 0, 7, 0, 5],
            [0, 8, 0, 7, 0, 0, 4, 9, 0],
            [6, 0, 0, 3, 0, 0, 0, 0, 2]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 0, 0, 4, 0, 1, 3, 8, 0],
            [0, 0, 0, 7, 6, 0, 9, 0, 0],
            [0, 3, 7, 0, 0, 2, 0, 0, 6],
            [9, 1, 0, 6, 0, 0, 0, 0, 5],
            [7, 0, 8, 3, 0, 5, 0, 0, 0],
            [0, 4, 0, 0, 0, 9, 0, 6, 8],
            [6, 0, 0, 8, 0, 0, 5, 0, 0],
            [1, 0, 4, 0, 0, 0, 8, 2, 0],
            [0, 5, 3, 0, 1, 0, 0, 7, 9]
        ],
        "level": 3
    },
    {
        "task": [
            [2, 0, 0, 0, 8, 3, 0, 1, 0],
            [6, 9, 1, 0, 0, 7, 0, 3, 0],
            [0, 0, 8, 0, 9, 1, 0, 0, 7],
            [1, 2, 3, 0, 7, 0, 0, 0, 6],
            [0, 0, 0, 0, 4, 0, 1, 5, 2],
            [0, 0, 0, 2, 0, 0, 7, 0, 0],
            [0, 6, 4, 0, 0, 9, 0, 0, 5],
            [3, 7, 0, 8, 0, 0, 9, 6, 0],
            [0, 0, 0, 7, 6, 2, 3, 0, 4]
        ],
        "level": 3
    },
    {
        "task": [
            [8, 0, 0, 0, 6, 4, 0, 1, 0],
            [9, 2, 4, 0, 0, 5, 0, 6, 0],
            [0, 0, 3, 0, 7, 9, 0, 0, 4],
            [3, 9, 6, 0, 5, 0, 0, 0, 8],
            [0, 0, 0, 0, 9, 0, 5, 3, 1],
            [0, 0, 0, 4, 0, 0, 6, 0, 0],
            [0, 7, 1, 0, 0, 8, 0, 0, 3],
            [6, 3, 0, 9, 0, 0, 7, 4, 0],
            [0, 0, 0, 5, 3, 7, 1, 0, 6]
        ],
        "level": 3
    },
    {
        "task": [
            [6, 2, 7, 4, 3, 0, 0, 0, 0],
            [0, 9, 0, 7, 0, 0, 5, 0, 0],
            [4, 0, 0, 0, 9, 8, 3, 0, 7],
            [0, 1, 0, 5, 0, 7, 2, 0, 3],
            [0, 0, 0, 3, 1, 0, 7, 0, 0],
            [0, 3, 4, 0, 0, 6, 0, 1, 5],
            [0, 7, 9, 0, 0, 0, 0, 0, 2],
            [0, 0, 3, 1, 0, 2, 0, 7, 0],
            [1, 0, 2, 0, 7, 0, 0, 0, 8]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 0, 2, 0, 9, 0, 0, 0, 1],
            [0, 8, 9, 0, 0, 5, 0, 4, 0],
            [0, 0, 0, 0, 1, 4, 9, 0, 8],
            [0, 0, 0, 0, 0, 3, 1, 5, 0],
            [0, 9, 1, 0, 4, 0, 7, 0, 0],
            [0, 7, 0, 0, 0, 0, 4, 0, 9],
            [0, 0, 8, 4, 3, 1, 6, 0, 0],
            [4, 0, 0, 0, 0, 9, 0, 1, 3],
            [0, 1, 0, 0, 5, 0, 0, 9, 0]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 0, 0, 3, 1, 0, 0, 2, 0],
            [3, 8, 7, 0, 0, 5, 0, 4, 0],
            [2, 1, 0, 9, 0, 0, 6, 0, 0],
            [1, 0, 0, 0, 7, 0, 0, 0, 8],
            [7, 0, 0, 6, 0, 2, 0, 5, 1],
            [0, 0, 0, 0, 3, 9, 4, 0, 7],
            [0, 0, 1, 4, 0, 6, 7, 0, 2],
            [6, 2, 0, 7, 0, 0, 0, 3, 4],
            [0, 7, 0, 0, 2, 0, 0, 1, 0]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 0, 5, 2, 0, 0, 1, 0, 0],
            [0, 0, 0, 3, 6, 0, 9, 5, 0],
            [0, 9, 0, 1, 5, 0, 0, 0, 2],
            [0, 4, 9, 0, 0, 0, 5, 1, 0],
            [2, 0, 8, 0, 0, 0, 7, 4, 0],
            [0, 0, 6, 0, 4, 1, 0, 8, 0],
            [0, 0, 1, 9, 0, 6, 3, 0, 0],
            [0, 0, 0, 8, 1, 0, 0, 9, 7],
            [9, 3, 0, 0, 2, 0, 0, 0, 1]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 7, 0, 8, 9, 0, 0, 0, 1],
            [4, 9, 5, 0, 1, 0, 8, 0, 0],
            [0, 1, 0, 0, 5, 4, 0, 0, 9],
            [1, 0, 0, 5, 0, 0, 3, 8, 7],
            [5, 8, 0, 6, 0, 7, 0, 0, 4],
            [0, 0, 7, 0, 8, 0, 0, 6, 0],
            [0, 2, 6, 0, 7, 5, 0, 4, 0],
            [7, 0, 1, 4, 0, 0, 0, 9, 0],
            [0, 0, 0, 9, 0, 1, 5, 7, 0]
        ],
        "level": 3
    },
    {
        "task": [
            [0, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 6, 5, 0, 9, 0],
            [1, 8, 5, 9, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 7],
            [5, 0, 0, 1, 7, 9, 0, 0, 0],
            [7, 0, 2, 3, 0, 0, 0, 0, 8],
            [6, 0, 1, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 0, 8, 2, 0, 0, 6],
            [0, 7, 0, 0, 9, 0, 0, 2, 5]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 3, 6, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 2, 7, 0, 0, 0, 3],
            [9, 0, 0, 0, 0, 0, 7, 8, 0],
            [6, 0, 0, 7, 0, 0, 4, 0, 0],
            [0, 0, 9, 0, 0, 5, 0, 6, 0],
            [0, 4, 0, 6, 8, 0, 0, 0, 9],
            [0, 0, 0, 0, 1, 0, 2, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 1, 5],
            [0, 0, 0, 5, 4, 0, 6, 0, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 1, 0, 7, 0, 4, 8, 0, 0],
            [0, 0, 3, 0, 0, 8, 0, 1, 7],
            [0, 9, 8, 0, 5, 0, 4, 0, 0],
            [1, 0, 0, 5, 0, 2, 0, 8, 0],
            [0, 0, 9, 6, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 9],
            [9, 0, 0, 0, 1, 0, 7, 0, 0],
            [4, 0, 0, 3, 0, 0, 0, 6, 0],
            [2, 0, 7, 0, 6, 0, 0, 5, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 0, 8, 0, 7, 3, 0, 0, 4],
            [0, 6, 0, 0, 0, 0, 0, 2, 7],
            [0, 0, 0, 1, 0, 0, 0, 6, 0],
            [0, 0, 2, 0, 0, 7, 4, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 2],
            [0, 4, 0, 8, 1, 0, 7, 0, 0],
            [1, 0, 0, 0, 9, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0, 2, 0, 1],
            [0, 8, 0, 7, 4, 0, 6, 0, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 0, 0, 8, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 6, 7, 0, 8, 0],
            [2, 8, 4, 9, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 9],
            [8, 0, 0, 5, 2, 9, 0, 0, 0],
            [4, 0, 5, 1, 0, 0, 0, 0, 3],
            [7, 0, 8, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 5, 2, 0, 0, 8],
            [0, 6, 0, 0, 4, 0, 0, 1, 2]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 0, 0, 3, 0, 0, 6, 7, 0],
            [7, 0, 4, 0, 1, 0, 0, 5, 0],
            [0, 0, 8, 0, 7, 0, 0, 0, 9],
            [0, 9, 2, 7, 0, 0, 0, 6, 0],
            [0, 7, 0, 2, 0, 0, 0, 0, 1],
            [6, 0, 0, 0, 5, 3, 0, 0, 0],
            [0, 0, 0, 6, 0, 0, 0, 0, 2],
            [1, 3, 0, 0, 2, 0, 0, 4, 0],
            [0, 2, 7, 0, 0, 8, 5, 0, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [9, 7, 6, 0, 4, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 7, 6, 3, 4, 0],
            [0, 6, 0, 0, 1, 8, 2, 0, 0],
            [0, 3, 2, 0, 0, 0, 0, 8, 4],
            [0, 8, 0, 2, 0, 0, 0, 5, 0],
            [6, 0, 5, 0, 2, 0, 0, 0, 3],
            [7, 0, 8, 0, 0, 0, 0, 9, 5],
            [0, 0, 0, 0, 0, 9, 0, 0, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 3, 0, 2, 0, 8, 0, 0, 0],
            [6, 7, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 9, 0, 0, 0, 4, 6],
            [0, 0, 4, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 3, 0, 2],
            [3, 0, 6, 0, 0, 5, 0, 9, 0],
            [0, 0, 0, 0, 9, 0, 4, 2, 1],
            [0, 4, 1, 5, 0, 0, 0, 6, 0],
            [9, 6, 0, 1, 2, 0, 0, 0, 0]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 1, 0, 3, 4, 0, 0, 2, 0],
            [0, 0, 9, 0, 2, 0, 4, 0, 0],
            [4, 8, 0, 0, 0, 0, 9, 0, 3],
            [1, 0, 0, 2, 0, 8, 0, 4, 0],
            [0, 0, 8, 6, 1, 0, 0, 5, 0],
            [0, 6, 3, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 4, 5, 0, 8],
            [0, 0, 1, 9, 5, 0, 6, 0, 0],
            [5, 0, 0, 0, 0, 6, 0, 0, 2]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 0, 0, 4, 0, 0, 0, 0, 0],
            [0, 8, 0, 0, 9, 2, 0, 7, 0],
            [2, 5, 7, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 7],
            [7, 0, 0, 1, 6, 3, 0, 0, 0],
            [3, 0, 1, 7, 0, 0, 0, 0, 6],
            [8, 0, 2, 0, 0, 7, 0, 0, 0],
            [0, 0, 0, 0, 2, 1, 0, 0, 9],
            [0, 1, 0, 0, 4, 0, 0, 8, 2]
        ],
        "level": 4
    },
    {
        "task": [
            [0, 0, 6, 0, 0, 1, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 8, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 3, 4, 0, 8],
            [0, 0, 0, 7, 0, 0, 0, 0, 3],
            [0, 3, 0, 0, 1, 0, 0, 0, 0],
            [0, 4, 2, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 7, 0, 2, 0],
            [0, 0, 0, 0, 0, 0, 6, 0, 0]
        ],
        "level": 5
    },
    {
        "task": [
            [2, 0, 6, 3, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 2, 7],
            [0, 2, 0, 0, 0, 0, 0, 0, 8],
            [3, 0, 0, 9, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 2, 8, 0, 1, 0],
            [0, 5, 0, 0, 0, 9, 0, 0, 0],
            [9, 6, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 3, 0, 0, 1]
        ],
        "level": 5
    },
    {
        "task": [
            [2, 0, 7, 1, 0, 0, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 7, 0, 0, 2, 1],
            [0, 4, 0, 0, 0, 0, 0, 0, 8],
            [8, 0, 0, 9, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 2, 8, 0, 3, 0],
            [0, 2, 0, 0, 0, 9, 0, 0, 0],
            [4, 5, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 2, 0, 0, 3]
        ],
        "level": 5
    },
    {
        "task": [
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 1, 5],
            [0, 0, 0, 0, 6, 9, 0, 0, 0],
            [0, 0, 5, 0, 0, 0, 0, 2, 0],
            [0, 0, 0, 6, 7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 4],
            [0, 4, 2, 0, 0, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 6, 8, 0, 0],
            [0, 0, 0, 4, 0, 0, 0, 0, 0]
        ],
        "level": 5
    },
    {
        "task": [
            [0, 0, 0, 5, 0, 8, 4, 0, 0],
            [0, 0, 0, 0, 0, 7, 0, 3, 0],
            [0, 8, 0, 0, 0, 0, 0, 0, 7],
            [8, 0, 0, 0, 0, 9, 0, 0, 0],
            [0, 0, 0, 0, 7, 0, 0, 0, 5],
            [0, 0, 0, 0, 6, 0, 0, 0, 0],
            [7, 0, 0, 0, 0, 0, 2, 6, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 0, 0, 5, 0, 0]
        ],
        "level": 5
    },
    {
        "task": [
            [3, 0, 0, 0, 0, 0, 0, 5, 0],
            [5, 0, 0, 4, 0, 0, 0, 6, 0],
            [0, 0, 7, 0, 6, 0, 0, 0, 4],
            [0, 5, 0, 0, 3, 0, 2, 0, 0],
            [0, 0, 3, 0, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 2, 0, 5, 0, 9],
            [0, 4, 0, 0, 0, 6, 0, 0, 5],
            [0, 3, 5, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0, 0, 0]
        ],
        "level": 5
    },
    {
        "task": [
            [5, 0, 2, 4, 0, 0, 0, 0, 0],
            [0, 0, 6, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 7, 0, 0, 5, 6],
            [0, 8, 0, 0, 0, 0, 0, 0, 1],
            [4, 0, 0, 7, 0, 0, 0, 9, 0],
            [0, 0, 0, 0, 4, 5, 0, 7, 0],
            [0, 6, 0, 0, 0, 7, 0, 0, 0],
            [3, 7, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 9, 0, 6, 0, 0, 4]
        ],
        "level": 5
    },
    {
        "task": [
            [5, 0, 8, 1, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 5, 0, 0, 6, 9],
            [0, 5, 0, 0, 0, 0, 0, 0, 8],
            [4, 0, 0, 5, 0, 0, 0, 7, 0],
            [0, 0, 0, 0, 8, 4, 0, 2, 0],
            [0, 6, 0, 0, 0, 2, 0, 0, 0],
            [8, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 1, 0, 0, 5]
        ],
        "level": 5
    },
    {
        "task": [
            [0, 0, 0, 0, 9, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 1, 4, 0],
            [0, 0, 9, 0, 0, 0, 2, 0, 0],
            [0, 4, 0, 0, 0, 9, 0, 0, 0],
            [3, 0, 6, 0, 0, 0, 4, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 0],
            [2, 3, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 1, 0, 0, 0, 2, 0],
            [8, 0, 0, 0, 5, 0, 0, 0, 4]
        ],
        "level": 5
    },
    {
        "task": [
            [0, 5, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 2, 0, 7, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 6, 0, 0, 0],
            [0, 0, 3, 0, 6, 0, 0, 5, 0],
            [5, 0, 0, 4, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 9],
            [0, 1, 5, 0, 0, 0, 0, 2, 0],
            [8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 7, 6]
        ],
        "level": 5
    },
]


function testValidator(data) {
    // row
    for (let i = 0; i < 9; i++) {
        let h = new Set(data[i])
        if (h.size !== 9) {
            return false;
        }
    }
    // column
    for (let i = 0; i < 9; i++) {
        let h = new Set();
        for (let k = 0; k < 9; k++) {
            h.add(data[k][i]);
        }
        if (h.size !== 9) {
            return false;
        }
    }
    // block
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            let sector_x = Math.trunc(row / 3) * 3;
            let sector_y = Math.trunc(col / 3) * 3;
            let h = new Set();
            for (let x = sector_x; x < sector_x + 3; x++) {
                for (let y = sector_y; y < sector_y + 3; y++) {
                    h.add(data[x][y]);
                }
            }
            if (h.size !== 9) {
                return false;
            }
        }
    }
    return true;
}

function testWindow() {
    let block = document.createElement('div');
    block.style.width = '100%';
    block.style.height = '100%';
    block.style.position = 'absolute';
    block.style.top = '0';
    block.style.left = '0';
    block.style.background = 'white';
    block.style.textAlign = 'center';

    let ul = document.createElement('ul');
    ul.style.textAlign = 'start';
    ul.style.display = 'inline-block';
    for (let i = 0; i < dataset.length; i++) {
        let li = document.createElement('li');
        li.innerText = 'Test ' + (i + 1) + ': level: ' + dataset[i].level + ' - ';
        li.style.listStyleType = 'none';
        let span = document.createElement('span');
        span.innerText = ' wait';
        span.id = 'test-' + i;
        span.style.color = 'gray';
        li.appendChild(span);
        ul.appendChild(li);
    }
    block.appendChild(ul);
    document.body.appendChild(block);
    let startTime = new Date().getTime();
    startTests();
    let endTime = new Date().getTime();
    let button = document.createElement('button');
    button.innerText = 'close';
    button.style.background = '#28a745'
    button.style.position = 'absolute';
    button.style.top = '0';
    button.style.right = '0';
    button.onclick = function () {
        let href = location.href;
        location.href = href.slice(0, href.indexOf('#tests'))
    }
    let elapsed = document.createElement('span');
    elapsed.innerText = 'Elapsed: ' + (endTime - startTime) + ' ms';
    elapsed.style.position = 'absolute';
    elapsed.style.top = '0';
    elapsed.style.left = '0';
    block.appendChild(button);
    block.appendChild(elapsed);
}


function startTests() {
    for (let test = 0; test < dataset.length; test++) {
        let span = document.getElementById('test-' + test);
        span.innerText = 'testing';
        span.style.color = '#ffbc00';
        let data = dataset[test].task;
        let startTime = new Date().getTime();
        solver(data, 0, 0);
        let endTime = new Date().getTime();
        let result = testValidator(data);
        if (result) {
            console.log(data);
            span.innerText = 'pass'
            span.style.color = 'green';
            let parent = span.parentNode;
            let elem = document.createElement('span');
            elem.innerText = ' Elapsed: ' + (endTime - startTime) + ' ms';
            parent.appendChild(elem);

        } else {
            span.innerText = 'fail'
            span.style.color = 'red';
        }
    }
}