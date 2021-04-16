import { joinPosts } from "./../index";
import { posts } from "./__mocks__/posts";
import { users } from "./__mocks__/users";

const mockPosts = posts;
const mockUsers = users;

const expectedEmptyPosts = [
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "10",
        lng: "-20",
      },
    },
    posts: [],
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "10",
        lng: "-20",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    posts: [],
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

const expectedUsersWithPosts = [
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "10",
        lng: "-20",
      },
    },
    posts: [],
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "10",
        lng: "-20",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    posts: [
      {
        id: 96,
        title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        body:
          "in non odio excepturi sint eum\n" +
          "labore voluptates vitae quia qui et\n" +
          "inventore itaque rerum\n" +
          "veniam non exercitationem delectus aut",
      },
      {
        id: 97,
        title: "quas fugiat ut perspiciatis vero provident",
        body:
          "eum non blanditiis soluta porro quibusdam voluptas\n" +
          "vel voluptatem qui placeat dolores qui velit aut\n" +
          "vel inventore aut cumque culpa explicabo aliquid at\n" +
          "perspiciatis est et voluptatem dignissimos dolor itaque sit nam",
      },
    ],
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

test("basic getTitleDuplicates", () => {
  expect(joinPosts([], [])).toEqual([]);
  expect(joinPosts(mockPosts, [])).toEqual([]);
  expect(joinPosts([], mockUsers)).toStrictEqual(expectedEmptyPosts);
  expect(joinPosts(mockPosts, mockUsers)).toStrictEqual(expectedUsersWithPosts);
});
