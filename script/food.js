function generateFood(grid, snake) {
    let possiblePositions = []
    for (let i = 0; i < grid.rowsMax; i++) {
        for (let j = 0; j < grid.colsMax; j++) {
            let position = { row: i, col: j }
            if (isSnake(position, snake)) {
                continue
            }
            possiblePositions.push(position)
        }
    }

    let foodPositionIdx = Math.floor(Math.random() * possiblePositions.length)
    let foodPosition = possiblePositions[foodPositionIdx]

    let food = {
        row: foodPosition.row,
        col: foodPosition.col,
    }

    return food
}

function ateFood(head, food) {
    return head.row === food.row && head.col === food.col
}

