const request = require("request");

request(
  "https://jsonplaceholder.typicode.com/users/1",
  function (error, response, userBody) {
    if (error) {
      console.log("Error: " + error);
    }

    const userInfo = JSON.parse(userBody);
    request(
      `https://jsonplaceholder.typicode.com/posts?userId=${userInfo.id}`,
      function (error, response, userPostBody) {
        if (error) {
          console.log("Error: " + error);
        }

        const userPosts = JSON.parse(userPostBody);
        const firstPost = [...userPosts].shift(); //will get first post from the post array by removing that post from userPosts array

        request(
          `https://jsonplaceholder.typicode.com/posts/${firstPost.id}/comments`,
          function (error, response, commentsBody) {
            if (error) {
              console.log("Error: " + error);
            }

            const userComments = JSON.parse(commentsBody);
            console.log(userComments);
          }
        );
      }
    );
  }
);
