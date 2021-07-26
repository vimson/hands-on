const request = require("request");

function fetchAPI(url) {
  return new Promise((resolve, reject) => {
    request(url, function (err, res, body) {
      if (err) reject(err);
      else resolve(JSON.parse(body));
    });
  });
}

async function fetchComments() {
  const userInfo = await fetchAPI(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const userPosts = await fetchAPI(
    `https://jsonplaceholder.typicode.com/posts?userId=${userInfo.id}`
  );

  const firstPost = [...userPosts].shift(); //will get first post from the post array by removing that post from userPosts array
  const userComments = await fetchAPI(
    `https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`
  );

  console.log(userComments);
}

fetchComments();
