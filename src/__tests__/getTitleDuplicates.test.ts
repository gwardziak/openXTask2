import { getTitleDuplicates } from "./../index";
import { posts } from "./__mocks__/posts";

const mockPosts = posts;

const postsWithSameTitle = [
  {
    userId: 10,
    id: 96,
    title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    body:
      "in non odio excepturi sint eum\n" +
      "labore voluptates vitae quia qui et\n" +
      "inventore itaque rerum\n" +
      "veniam non exercitationem delectus aut",
  },
  {
    userId: 10,
    id: 97,
    title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    body:
      "eum non blanditiis soluta porro quibusdam voluptas\n" +
      "vel voluptatem qui placeat dolores qui velit aut\n" +
      "vel inventore aut cumque culpa explicabo aliquid at\n" +
      "perspiciatis est et voluptatem dignissimos dolor itaque sit nam",
  },
];

test("basic getTitleDuplicates", () => {
  expect(getTitleDuplicates(mockPosts)).toEqual([]);
  expect(getTitleDuplicates([])).toEqual([]);
  expect(getTitleDuplicates(postsWithSameTitle)).toStrictEqual([
    "quaerat velit veniam amet cupiditate aut numquam ut sequi",
  ]);
});
