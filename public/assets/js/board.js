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

async function buildBoard() {

    let threads = [];

    const response = await fetch(threadIdRoute);
    threads = await response.json();
    console.log(threads);

    for(let i = 0; i < threads.length; i++) {
        cardSpace.innerHTML +=`
       <div class="card text-bg-secondary m-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="Placeholder img">
            <div class="card-body">
                <h5 class="card-title">${threads[i].title}</h5>
                <p class="card-text">${threads[i].thread_description}</p>
                <a href="#" class="btn btn-success">Open Thread</a>
            </div>
        </div>
        `
    }

    
}

buildBoard();
