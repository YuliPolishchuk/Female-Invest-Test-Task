import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const generateMockPosts = (page: number, pageSize: number) => {
  return Array.from({ length: pageSize }, (_, i) => {
    const randomMinutesAgo = Math.floor(Math.random() * 120) + 1;

    return {
      id: `post-${(page - 1) * pageSize + i}`,
      username: `User ${(page - 1) * pageSize + i + 1}`,
      content: `This is post content for post ${(page - 1) * pageSize + i + 1}.`,
      likes: Math.floor(Math.random() * 100),
      isLiked: false,
      createdAt: dayjs().subtract(randomMinutesAgo, "minute").toISOString(),
    };
  });
};
