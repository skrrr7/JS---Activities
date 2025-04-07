// fetch method

fetch('https://jsonplaceholder.typicode.com/posts')
//allow us to precess the data we retrieve using fetch
.then(function(response){
    // to parse the incoming data as a proper JS object
    return response.json()
})
// to do something with the processed server response
.then(function(data){
    showPosts(data);
})

//showPost will create html elements
const showPosts = (posts) =>
{
    //console.log(posts)

    let postEntries = '';

    posts.forEach(function(post){
        //console.log(post);

        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });
    console.log(postEntries);
    document.querySelector('#div-post-entries').innerHTML = postEntries;
}
// Elements for "View A Post"
const postIdInput = document.getElementById('view-post-id');
const viewBtn = document.getElementById('btn-view-post');
const viewForm = document.getElementById('form-view-post');
const singlePostDisplay = document.getElementById('single-post-display');

// Enable view button only when input is not empty
postIdInput.addEventListener('input', () => {
    viewBtn.disabled = postIdInput.value.trim() === '';
});

viewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = postIdInput.value.trim();

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!res.ok) {
            singlePostDisplay.innerHTML = `<p>Post not found.</p>`;
        } else {
            const post = await res.json();
            singlePostDisplay.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button id="btn-delete-post">Delete</button>
            `;

            document.getElementById('btn-delete-post').addEventListener('click', () => {
                singlePostDisplay.innerHTML = '';
            });
        }
    } catch (error) {
        singlePostDisplay.innerHTML = `<p>Error fetching post.</p>`;
    }

    // Clear the input
    postIdInput.value = '';
    viewBtn.disabled = true;
});
