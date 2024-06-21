function moveSnake(snake) {
    let leader = { row: snake.head.row, col: snake.head.col }
    let nextLeader = undefined

    snake.head.row += snake.direction.row
    snake.head.col += snake.direction.col

    for (let i = 0; i < snake.tail.length; i++) {
        let follower = snake.tail[i]
        nextLeader =  { row: follower.row, col: follower.col }

        follower.row = leader.row
        follower.col = leader.col

        leader = nextLeader
    }
}

function paintSnake(snake, colors) {
    paint(snake.head, colors.head)

    for (let i = 0; i < snake.tail.length; i++) {
        let tailLink = snake.tail[i]
        paint(tailLink, colors.tail)
    }
}

function isSnake(position, snake) {
    return isHead(position, snake) || isTail(position, snake)
}

function isHead(position, snake) {
    return (
        position.row === snake.head.row 
        && position.col === snake.head.col
    )
}

function isTail(position, snake) { 
    for (let tailLink of snake.tail) {
        if (position.row === tailLink.row && position.col === tailLink.col) {
            return true
        }
    }
    return false
}

function growSnake(snake, photoLastTailLink) {
    snake.tail.push(photoLastTailLink)
}