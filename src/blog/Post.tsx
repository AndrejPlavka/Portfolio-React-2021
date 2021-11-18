import { BlogContext, PostType } from "./BlogContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// Styles:
import { IconEdit, IconTrash } from "../a/assets/icons";
import { theme as blog } from "./theme";
import styled, { keyframes } from "styled-components";

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}`;

const DivPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 1s ${fadeIn} forwards;
  padding: 3em;
  h1 {
    font-weight: 400;
    margin: 1em 0.25em 0.25em;
  }
  p {
    font-weight: 400;
    margin: 0.25em;
  }
`;
const ButtonInteract = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.5em;
  padding: 0.5em 0.75em 0.5em 0.5em;
  border: ${blog.borderBasic};
  border-radius: ${blog.borderRadius};
  background: transparent;
  opacity: 0.5;
  cursor: pointer;
  transition: 100ms linear;
  div {
    width: 1em;
    height: 100%;
    margin: 0 0.25em 0 0;
  }
  :hover {
    background: ${blog.backgroundSecondary};
    color: ${blog.textSecondary};
    opacity: 1;
  }
`;
const DivContent = styled.div`
  width: 100%;
  padding: 3em 0;
  font-size: 1.25em;
  overflow-wrap: break-word;
  p {
    font-weight: 350;
    padding: 0 10%;
  }
`;
const edit = <IconEdit />;
const trash = <IconTrash />;

// Component:
export const Post = (props: { post: PostType }) => {
  const { deletePost } = useContext(BlogContext);
  const date = new Date(props.post.dateCreated);
  const history = useHistory();

  // hanlders:
  const handleDelete = () => {
    deletePost(props.post.id);
    history.push("/");
  };

  const handleEdit = () => {
    history.push("/post/edit/" + props.post.id);
  };

  // Template:
  return (
    <DivPost>
      <ButtonInteract onClick={handleDelete}>
        <div>{trash}</div>
        Delete post
      </ButtonInteract>
      <ButtonInteract onClick={handleEdit}>
        <div>{edit}</div> Edit post
      </ButtonInteract>
      <h1>{props.post.title}</h1>
      <p>written by {props.post.author}</p>
      <p>{date.toLocaleString()}</p>
      {props.post.content !== "" ? (
        <DivContent>
          <p>
            <ReactMarkdown>{props.post.content}</ReactMarkdown>
          </p>
        </DivContent>
      ) : (
        <p>This post has no content</p>
      )}
    </DivPost>
  );
};
