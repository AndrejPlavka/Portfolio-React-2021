import { BlogContext, PostType } from "./BlogContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

// Styles:
import { theme as blog } from "./theme";
import styled, { keyframes } from "styled-components/macro";

// Styled components
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}`;

const DivPostManager = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: 1s ${fadeIn} forwards;
`;

const DivErrorInfo = styled.div`
  display: block;
  position: absolute;
  font-size: 1em;
  align-self: center;
  color: ${blog.errorColor};
  margin: 0.5em;
`;

const Label = styled.label`
  margin-top: 1em;
  font-size: 1.5em;
  font-weight: 300;
`;
const InputText = styled.input`
  height: 2em;
  padding: 0.5em 1em;
  font-size: 1.2em;
  background: ${blog.backgroundPrimary};
  border: ${blog.borderBasic};
  border-radius: ${blog.borderRadius};

  ::-webkit-input-placeholder {
    color: ${blog.errorColor};
  }
`;
const TextareaContent = styled.textarea`
  background: ${blog.backgroundPrimary};
  border: ${blog.borderBasic};
  border-radius: ${blog.borderRadius};
  height: 6em;
  padding: 0.5em 1em;
  font-size: 1.2em;
  ::-webkit-input-placeholder {
    color: ${blog.errorColor};
  }
`;

const ButtonSubmit = styled.button`
  align-self: flex-end;
  height: 3em;
  width: 7em;
  margin-top: 2em;
  font-size: 1.25em;
  background: ${blog.backgroundPrimary};
  border: ${blog.borderBasic};
  border-radius: ${blog.borderRadius};
  cursor: pointer;
  transition: 100ms linear;
  :hover {
    background: ${blog.backgroundSecondary};
    color: ${blog.textSecondary};
  }
`;
// inspiration: https://gist.github.com/6174/6062387#file-random-string
const randomID = () => Math.random().toString(36).substr(2, 15);

// Component:
export const PostManager = (props: { post?: PostType }) => {
  const { addOrEditPost } = useContext(BlogContext);
  const [content, setContent] = useState(props.post ? props.post.content : "");
  const [title, setTitle] = useState(props.post ? props.post.title : "");
  const [author, setAuthor] = useState(props.post ? props.post.author : "");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    setError("");
    //replace ,,space,, with ,,nothing,, to be sure tahat error's set right
    if (title.replace(" ", "") === "") {
      setError("Title is missing");
      return;
    }
    if (author.replace(" ", "") === "") {
      setError("Author is missing");
      return;
    }
    if (content.replace(" ", "") === "") {
      setError("Content is missing");
      return;
    }

    addOrEditPost({
      id: props.post ? props.post.id : randomID(),
      title: title,
      content: content,
      author: author,
      dateCreated: props.post ? props.post.dateCreated : Date.now(),
      dateEdited: Date.now(),
    });
    history.push("/");
  };

  // Template:
  return (
    <DivPostManager>
      <DivErrorInfo>{error}</DivErrorInfo>
      <Label htmlFor="title">Title</Label>
      <InputText
        // placeholder={error}
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label htmlFor="author">Author</Label>
      <InputText
        // placeholder={error}
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Label htmlFor="text">Text</Label>
      <TextareaContent
        // placeholder={error}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ButtonSubmit onClick={handleSubmit}>Submit</ButtonSubmit>
    </DivPostManager>
  );
};
