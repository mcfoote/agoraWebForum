const cardSpace = document.getElementById('cardSpace');
const boardName = document.getElementById('boardTitle').innerHTML;
const baseRoute = 'http://localhost:3001/api/threads/'
let threadIdRoute;

switch(boardName) {

    case '|Programming|':
        threadIdRoute = baseRoute + '1';
        break;
    case '|Gaming|':
        threadIdRoute = baseRoute + '2';
        break;
    case '|Music|':
        threadIdRoute = baseRoute + '3';
        break;
    case '|Video|':
        threadIdRoute = baseRoute + '4';
        break;
        
}

function buildBoard() {

    let threads = [];

    fetch(threadIdRoute)
}
