import { PostType } from "./BlogContext";

// Styles:
import { theme as blog } from "./theme";
import styled from "styled-components/macro";

// Stylecomponents:
const A = styled.a`
  text-decoration: none;
  width: 100%;
  :visited {
    color: ${blog.visitedSecondary};
  }
`;
const DivCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6em;
  margin: 1.5em 0 0;
  padding: 0.5em 1.5em;
  font-size: 1em;
  font-weight: 300;
  border: ${blog.borderBasic};
  border-radius: ${blog.borderRadius};
  transition: 150ms linear;
  h1 {
    font-weight: 300;
    font-size: 1.25em;
  }
  :hover {
    opacity: 0.5;
  }
`;
const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

// Component:
export const PostPreview = (props: { post: PostType }) => {
  const date = new Date(props.post.dateCreated);

  // Template:
  return (
    <A href={"/blog/post/" + props.post.id}>
      <DivCard>
        <h1>{props.post.title}</h1>
        <DivInfo>
          <span>{date.toLocaleString()}</span>
          <span>by {props.post.author}</span>
        </DivInfo>
      </DivCard>
    </A>
  );
};
