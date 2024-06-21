function bindControls(snake) {
    document.addEventListener('keydown', function(event) {
        console.log(event.key)

        let nextSnakeDirection = undefined

        if (event.key === 'ArrowUp') {
            nextSnakeDirection = { row: -1, col: 0 }
        } else if (event.key === 'ArrowDown') {
            nextSnakeDirection = { row: 1, col: 0 }
        } else if (event.key === 'ArrowRight') {
            nextSnakeDirection = { row: 0, col: 1 }
        } else if (event.key === 'ArrowLeft') {
            nextSnakeDirection = { row: 0, col: -1 }
        }

        snake.nextDirection = nextSnakeDirection
    });
}

function isValidMovement(currSnakeDirection, nextSnakeDirection) {
    let sumRow = currSnakeDirection.row + nextSnakeDirection.row
    if (sumRow === 0)
        return false
    let sumCol = currSnakeDirection.col + nextSnakeDirection.col
    if (sumCol === 0)
        return false
    return true
}