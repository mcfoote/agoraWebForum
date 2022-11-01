const cardSpace = document.getElementById('cardSpace');
const boardName = document.getElementById('boardTitle').innerHTML;
const baseRoute = 'http://localhost:3001/api/threads/'
const postBaseRoute = 'http://localhost:3001/api/posts/'
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
        let canvasName = 'threadCanvas'+threadID;
        let postCanvasName = 'postCanvas'+threadID;
        cardSpace.innerHTML +=`
       <div class="card text-bg-secondary m-3" style="width: 18rem;">
            <img src="" class="card-img-top" alt="Placeholder img">
            <div class="card-body">
                <h5 class="card-title">${threads[i].title}</h5>
                <p class="card-text">${threads[i].thread_description}</p>
                    <a class="btn btn-success" data-bs-toggle="offcanvas" href="#${canvasName}" role="button" aria-controls="offcanvasExample">Open Thread</a>
                        <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="${canvasName}" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">${threads[i].title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body" id="${postCanvasName}">
                            
                            </div>
                        </div>
            </div>
        </div>
        `;

        let posts = [];
        let postCanvas = document.getElementById(postCanvasName);
        let threadIdRoute = postBaseRoute + threadID;
        const response = await fetch(threadIdRoute);
        posts = await response.json();
        console.log(posts);

        for(j = 0; j < posts.length; j++) {
            postCanvas.innerHTML += `
            <div>
                ${posts[j].post_content}
            </div>
            `
        }
       
    }

    
}

buildBoard();
