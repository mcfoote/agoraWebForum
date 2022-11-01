const cardSpace = document.getElementById('cardSpace');
const boardName = document.getElementById('boardTitle').innerHTML;
const baseRoute = 'http://localhost:3001/api/threads/'
const postBaseRoute = 'http://localhost:3001/api/posts/'
let boardIdRoute;
let boardID;
let threadIdArr = [];
let postBtnArr = [];

const threadPostBtn = document.getElementById('threadPostBtn');
threadPostBtn.addEventListener('click', postThread);

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

    cardSpace.innerHTML = ``;

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
                            <form class="">
                                <div class="mb-3">
                                    <label for="postInput" class="form-label">Post</label>
                                    <input type="text" class="form-control" id="postInput${threadID}" aria-describedby="" title="${threadID}">
                                </div>
                                <button type="submit" class="btn btn-success" id="postBtn${threadID}">Post</button>
                            </form>
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

        let postBtn = document.getElementById('postBtn' + threadID);
        console.log(postBtn);
        postBtnArr[i] = postBtn;
        threadIdArr[i] = threadID;
        
        /*
        postBtn.addEventListener('click', function () {
            console.log('arrived at function');
            event.preventDefault();
            let postInput = document.getElementById(('postInput'+threadID)).value;
            console.log(postInput);
            fetch(postBaseRoute, {
        
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    post_content: postInput,
                    thread_id: threadID,
                }),
        
            });
            
            console.log(response);
            
            buildBoard();
            
        });
        */
        //eval('const' + 'postInput' + threadID + '=' + document.getElementById('postInput'+threadID) + ';');
       // eval(postInput+threadID).addEventListener('click', addPost);
    }
    buildThreadsFuncs();
}

async function postThread() {

    event.preventDefault();
    const titleInput = document.getElementById('threadTitleInput').value;
    const descriptionInput = document.getElementById('threadDescriptionInput').value;
   
    
    const response = await fetch(baseRoute, {

        method: 'POST',
        headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
        body: JSON.stringify({
            title: titleInput,
            thread_description: descriptionInput,
            board_id: boardID,
        }),

    });
    
    console.log(response);
    
    buildBoard();
};

async function addPost() {

    event.preventDefault();
    let postInput = document.getElementById(('postInput'+threadID)).value;
    console.log(postInput);
    fetch(postBaseRoute, {

        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            post_content: postInput,
            thread_id: threadID,
        }),

    });
    
    console.log(response);
    
    buildBoard();
}
/*
async function buildThreadsFuncs() {

    for(let k = 0; k < postBtnArr.length; k++) {
        let threadID = threadIdArr[k];
        let postBtn = postBtnArr[k];
        postBtn.addEventListener('click', addPost);
    }

}
*/

async function buildThreadsFuncs() {

    for(let k = 0; k < postBtnArr.length; k++) {
        const threadID = threadIdArr[k];
        const postBtn = postBtnArr[k];
        postBtn.addEventListener('click', function () {
            console.log('arrived at function');
            event.preventDefault();
            const postInput = document.getElementById(('postInput'+threadID)).value;
            console.log(postInput);
            const response = fetch(postBaseRoute, {
        
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    post_content: postInput,
                    thread_id: threadID,
                }),
        
            });
            
            console.log(response);
            
            buildBoard();
            
        });
    }

}

buildBoard();
/*
for(let k = 0; k < postBtnArr.length; k++) {
    let threadID = threadIdArr[k];
    let postBtn = postBtnArr[k];
    postBtn.addEventListener('click', function () {
        console.log('arrived at function');
        event.preventDefault();
        let postInput = document.getElementById(('postInput'+threadID)).value;
        console.log(postInput);
        fetch(postBaseRoute, {
    
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                post_content: postInput,
                thread_id: threadID,
            }),
    
        });
        
        console.log(response);
        
        buildBoard();
        
    });
}
*/
