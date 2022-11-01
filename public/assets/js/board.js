const cardSpace = document.getElementById('cardSpace');
const boardName = document.getElementById('boardTitle').innerHTML;
const baseRoute = 'http://localhost:3001/api/threads/'
let boardIdRoute;
let boardID;

switch(boardName) {

    case '|Programming|':
        boardID = 1;
        break;
    case '|Gaming|':
        boardID = 2;
        break;
    case '|Music|':
        boardID = 3;
        break;
    case '|Video|':
        boardID = 4;
        break;

}

boardIdRoute = baseRoute + boardID;

async function buildBoard() {

    let threads = [];

    const response = await fetch(boardIdRoute);
    threads = await response.json();
    console.log(threads);

    for(let i = 0; i < threads.length; i++) {
        let threadID = threads[i].id;
        cardSpace.innerHTML +=`
       <div class="card text-bg-secondary m-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="Placeholder img">
            <div class="card-body">
                <h5 class="card-title">${threads[i].title}</h5>
                <p class="card-text">${threads[i].thread_description}</p>
                <a href="#" class="btn btn-success">Open Thread</a>
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
    
            </div>
        </div>
        `;
       
    }

    
}

buildBoard();
