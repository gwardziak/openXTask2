import { api } from "./utils/api";
import { getDistanceFromLatLonInKm } from "./utils/getDistanceFromLatLonInKm";

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

export type User = Api.User & {
  posts?: Api.Post[];
  neighbourhood?: neighbourhood;
};

type neighbourhood = {
  neighbour: null | User;
  distance: number;
};

export const mapPostsToUserId = (posts: Api.Post[]) => {
  const postToUserId: {
    [key: string]: Pick<Api.Post, Exclude<keyof Api.Post, "userId">>[];
  } = {};

  for (const post of posts) {
    const { userId, ...args } = post;

    postToUserId[userId] ?? (postToUserId[userId] = []);

    postToUserId[userId].push(args);
  }
  return postToUserId;
};

export const joinPosts = (posts: Api.Post[], users: Api.User[]): User[] => {
  const transformPosts = mapPostsToUserId(posts);
  const cloneUsers = JSON.parse(JSON.stringify(users));

  for (const user of cloneUsers) {
    user.posts = transformPosts[user.id] ?? [];
  }

  return cloneUsers;
};

export const countUserPosts = (users: User[]): string[] => {
  const list: string[] = [];

  for (const user of users) {
    const message = `${user.username} napisał(a) ${
      user.posts ? user.posts.length : 0
    } postów`;

    list.push(message);
  }

  return list;
};

export const getTitleDuplicates = (posts: Api.Post[]) => {
  const duplicates: string[] = [];
  const postCache: { [key: string]: string } = {};

  for (const post of posts) {
    if (!postCache[post.title]) {
      postCache[post.title] = post.title;
    } else {
      duplicates.push(post.title);
    }
  }

  return duplicates;
};

export const findNeighbor = (users: User[]) => {
  const cloneUsers = JSON.parse(JSON.stringify(users));
  const neighbours = JSON.parse(JSON.stringify(users));

  if (cloneUsers.length === 0) {
    return [];
  }

  if (cloneUsers.length === 1) {
    const neighbourhood = {
      neighbour: null,
      distance: 0,
    };

    cloneUsers[0].neighbourhood = neighbourhood;
    return cloneUsers;
  }

  for (const user of cloneUsers) {
    const neighbourhood: neighbourhood = {
      neighbour: null,
      distance: Infinity,
    };

    for (const neighbour of neighbours) {
      if (user.id !== neighbour.id) {
        const distance = getDistanceFromLatLonInKm({
          firstLocation: {
            lat: parseFloat(user.address.geo.lat),
            lon: parseFloat(user.address.geo.lng),
          },
          secondLocation: {
            lat: parseFloat(neighbour.address.geo.lat),
            lon: parseFloat(neighbour.address.geo.lng),
          },
        });

        if (distance < neighbourhood.distance) {
          neighbourhood.neighbour = neighbour;

          neighbourhood.distance = distance;
        }
        user.neighbourhood = neighbourhood;
      }
    }
  }

  return cloneUsers;
};

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

  const usersWithPosts = joinPosts(posts, fetchedUsers);
  const countMessages = countUserPosts(usersWithPosts);
  const titleDuplicates = getTitleDuplicates(posts);
  const usersWithNeighbor = findNeighbor(usersWithPosts);
};

main();
