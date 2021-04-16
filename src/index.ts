import { api } from "./utils/api";

namespace Api {
  export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}

const main = async () => {
  let posts, fetchedUsers;

  try {
    posts = await api<Api.Post[]>("https://jsonplaceholder.typicode.com/posts");
    fetchedUsers = await api<Api.User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
  } catch (e) {
    console.log(`${e.message} error occured in one of fetching queries`);
    return;
  }
};

main();
