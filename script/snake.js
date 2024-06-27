function moveSnake(snake) {
    for (let i = snake.tail.length - 1; i >= 0; i--) {
        let tail = snake.tail[i];
        if (i == 0) {
            tail.row = snake.head.row;
            tail.col = snake.head.col;
            break;
        }

        let nextTail = snake.tail[i - 1];

        tail.row = nextTail.row;
        tail.col = nextTail.col;
    }

    snake.head.row += snake.direction.row
    snake.head.col += snake.direction.col
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