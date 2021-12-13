import getData from "./get-posts-module.js";
import isNumber from "is-number";

let user, posts;

const data = async (url, id) => {
  try {
    if (isNumber(id)) {
      user = await getData(url + "/users/", id);
      posts = await getData(url + "/posts?userId=", id);

      let currentUser = {
        userDetail: user.data,
        allPost: posts.data,
      };

      console.log(currentUser);
    } else {
      throw "Bir sayı değeri girilmedi.";
    }
  } catch (e) {
    console.log(e);
  }
};
await data("https://jsonplaceholder.typicode.com", 2);
