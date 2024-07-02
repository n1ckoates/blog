import { allPosts } from "./.content-collections/generated";

export default allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
