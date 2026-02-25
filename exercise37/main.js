// 1. Initialize State: Load from storage or start empty
let posts = JSON.parse(localStorage.getItem('myPosts')) || [];

const postsContainer = document.querySelector('#postsContainer');

function renderPosts() {
    postsContainer.innerHTML = '';
    
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = `post-card ${post.completed ? 'completed' : ''}`;
        
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            ${post.img ? `<img src="${post.img}" style="width:100%">` : ''}
            <p>${post.body}</p>
            <div class="actions">
                <button onclick="toggleComplete(${index})">${post.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function savePost() {
    const title = document.querySelector('#postTitle').value;
    const img = document.querySelector('#imageUrl').value;
    const body = document.querySelector('#postContent').value;

    if (!title || !body) return alert("Please fill in the title and content!");

    const newPost = { title, img, body, completed: false };
    posts.push(newPost);
    updateStorage();
    
    // Clear inputs
    document.querySelectorAll('input, textarea').forEach(el => el.value = '');
}

function deletePost(index) {
    posts.splice(index, 1);
    updateStorage();
}

function toggleComplete(index) {
    posts[index].completed = !posts[index].completed;
    updateStorage();
}

function editPost(index) {
    const post = posts[index];
    document.querySelector('#postTitle').value = post.title;
    document.querySelector('#imageUrl').value = post.img;
    document.querySelector('#postContent').value = post.body;
    
    deletePost(index); // Remove old version to replace with new
}

function updateStorage() {
    localStorage.setItem('myPosts', JSON.stringify(posts));
    renderPosts();
}

// Initial render
renderPosts();