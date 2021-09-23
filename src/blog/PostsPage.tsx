import { BlogContext } from "./BlogContext";
import { PostPreview } from "./PostPreview";
import { useContext } from "react";

export const Posts = () => {
  const { posts } = useContext(BlogContext);
  const message = "No posts available, add same if you dare!";

  return (
    <div>
      {posts.length > 0 ? (
        posts
          // MDN numbers[1,2,3] ... numbers.sort(function(a, b) { return b - a;}); ex.: [3,2,1]
          .sort((p1, p2) => {
            return p2.dateCreated - p1.dateCreated;
          })
          .map((post) => <PostPreview key={post.id} post={post} />)
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
};
