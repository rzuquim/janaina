function paintGrid(grid) {
    let tableHtml = ''

    for (let row = 0; row < grid.rowsMax; row++) {
        tableHtml += '<tr>'
        for (let col = 0; col < grid.colsMax; col++) {
            let id = row + ',' + col
            tableHtml += '<td id="' + id + '"> </td>' // + row + ',' + col +
        }
        tableHtml += '</tr>'
    }
    
    let gridTable = document.getElementById("grid")
    gridTable.innerHTML = tableHtml
}

function repaintWorld(grid, snake, food) {
    paintGrid(grid)
    paint(food, 'green')
    paintSnake(snake, colors)
}

function paint(cell, color) {
    let id = cell.row + ',' + cell.col
    let td = document.getElementById(id)
    if (!td) {
        console.error("Could not find grid position", id)
    }
    td.style.backgroundColor = color
}

function isGameOver(grid, snake) {
    if (snake.head.row < 0) {
        return true
    }

    if (snake.head.row >= grid.rowsMax) {
        return true
    }

    if (snake.head.col < 0) {
        return true
    }

    if (snake.head.col >= grid.colsMax) {
        return true
    }

    // lista todos as posicoes q nao sao cobra
    let possiblePositions = []
    for (let i = 0; i < grid.rowsMax; i++) {
        for (let j = 0; j < grid.colsMax; j++) {
            let position = { row: i, col: j }
            if (!isTail(position, snake)) {
                possiblePositions.push(position)
            }
        }
    }

    // verifica se a cabeca esta numa posicao que nao e cobra
    for (let position of possiblePositions) {
        if (position.row === snake.head.row 
            && position.col === snake.head.col) {
                return false
        }
    }

    return true
}