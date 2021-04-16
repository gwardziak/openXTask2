import { mapPostsToUserId } from "..";
import { posts } from "./__mocks__/posts";

const mockPosts = posts;
const expected = {
  "10": [
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
  11: [
    {
      id: 98,
      title: "laboriosam dolor voluptates",
      body:
        "doloremque ex facilis sit sint culpa\n" +
        "soluta assumenda eligendi non ut eius\n" +
        "sequi ducimus vel quasi\n" +
        "veritatis est dolores",
    },
  ],
};

test("basic mapPostToUserId", () => {
  expect(mapPostsToUserId([])).toStrictEqual({});

  expect(mapPostsToUserId(mockPosts)).toStrictEqual(expected);
});
