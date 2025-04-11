// [SECTION] Fetch Method - allows us to GET, POST, UPDATE, or DELETE data on a server.

// GET method - retrieves data from another server using the fetch method.
// The URL represents the address to access a resource/data from another machine (server).
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    // Parse the incoming data as a proper JS object for further processing.
    return response.json();
  })
  .then((data) => {
    // Process the fetched server response.
    showPosts(data);
  });

// Function to create HTML elements using the fetched data.
const showPosts = (posts) => {
  let postEntries = '';

  posts.forEach((post) => {
    postEntries += `
      <div id="post-${post.id}">
        <h3 id="post-title-${post.id}">${post.title}</h3>
        <p id="post-body-${post.id}">${post.body}</p>
        <button onclick="editPost('${post.id}')">Edit</button>
        <button onclick="deletePost('${post.id}')">Delete</button>
      </div>
    `;
  });

  // Update the HTML element with the processed post entries.
  document.querySelector('#div-post-entries').innerHTML = postEntries;
};

// Disable the "View" button initially.
document.querySelector('#view-post-button').disabled = true;

// Event listener for the "View Post" form submission.
document.querySelector('#form-view-post').addEventListener('submit', (e) => {
  e.preventDefault();

  const postId = document.querySelector('#txt-post-id').value;
  const viewPost = document.querySelector('#view-post');
  let viewSinglePost = '';

  // Fetch post data using the specific post ID.
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.id !== undefined) {
        viewSinglePost += `
          <div id="post-${data.id}">
            <h3 id="post-title-${data.id}">${data.title}</h3>
            <p id="post-body-${data.id}">${data.body}</p>
          </div>
        `;
        viewPost.innerHTML = viewSinglePost;
      } else {
        viewPost.innerHTML = '<p>Post not found.</p>';
      }

      document.querySelector('#txt-post-id').value = null;
      document.querySelector('#view-post-button').disabled = true;
    });
});

// Monitor changes in the input field to enable/disable the "View" button.
document.querySelector('#txt-post-id').addEventListener('input', (e) => {
  document.querySelector('#view-post-button').disabled = e.target.value === '';
});

// Event listener for adding new posts to the server.
document.querySelector('#form-add-post').addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.querySelector('#txt-title');
  const bodyInput = document.querySelector('#txt-body');

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: titleInput.value,
      body: bodyInput.value,
      userId: 1,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Successfully added.');

      // Clear input fields upon submission.
      titleInput.value = null;
      bodyInput.value = null;
    });
});

// Event listener for deleting all posts (simulated).
document.querySelector('#delete-all-post').addEventListener('click', (e) => {
  e.preventDefault();

  const posts = document.querySelectorAll('[id^="post-"]');

  posts.forEach((postElement) => {
    const id = postElement.id.replace('post-', '');

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        postElement.remove();
      }
    });
  });

  alert('All posts deleted from view (simulated).');
});

// Function to edit a post.
const editPost = (id) => {
  const title = document.querySelector(`#post-title-${id}`).innerHTML;
  const body = document.querySelector(`#post-body-${id}`).innerHTML;

  document.querySelector('#txt-edit-id').value = id;
  document.querySelector('#txt-edit-title').value = title;
  document.querySelector('#txt-edit-body').value = body;
  document.querySelector('#btn-submit-update').removeAttribute('disabled');
};

// Function to delete a specific post.
const deletePost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        const postElement = document.querySelector(`#post-${id}`);
        if (postElement) postElement.remove();
        alert('Deleted post successfully.');
      } else {
        alert('Failed to delete post.');
      }
    });
};

// Event listener for updating a post.
document.querySelector('#btn-submit-update').addEventListener('click', (e) => {
  e.preventDefault();

  const id = document.querySelector('#txt-edit-id').value;
  const title = document.querySelector('#txt-edit-title').value;
  const body = document.querySelector('#txt-edit-body').value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, body }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Successfully updated.');

      document.querySelector(`#post-title-${id}`).innerHTML = title;
      document.querySelector(`#post-body-${id}`).innerHTML = body;

      document.querySelector('#txt-edit-id').value = '';
      document.querySelector('#txt-edit-title').value = '';
      document.querySelector('#txt-edit-body').value = '';
      document.querySelector('#btn-submit-update').disabled = true;
    });
});
