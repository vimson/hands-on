## What is callback hell?

This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.


### How to run this on your local development machine

* Checkout this repository
* Go to the `callback-hell` directory 
* Perform `npm install`
* Run `node without_callbacks.js` to run the code with callbacks
* Run `node with_callbacks.js` to run the code without callbacks using async/await
* Refer [MDN Async_await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) for more


### How to make callback-based functions return a promise
Wrap the function in another function which returns a promise. It then resolves or rejects based on callback arguments. 
