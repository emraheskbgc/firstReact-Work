import axios from "axios";

export default async function getData(user_id) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );
  console.log("USER : ", user);

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + user_id
  );
  console.log("POST : ", post);
}
