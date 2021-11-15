import { BlogContext } from "./BlogContext";
import { PostPreview } from "./PostPreview";
import { useContext } from "react";
//Styles:
import styled, { keyframes } from "styled-components/macro";

//Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}`;

const DivMain = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: 1s ${fadeIn} forwards;
  h3 {
    margin: 2em;
    font-weight: 300;
  }
`;

// Component:
export const Posts = () => {
  const { posts } = useContext(BlogContext);
  const message = "No posts available, add same if you dare!";

  return (
    <DivMain>
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
    </DivMain>
  );
};
