import { BlogContext, PostType } from "./BlogContext";
import { theme } from "./theme";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const DivErrorInfo = styled.div`
  font-size: 1.1rem;
  align-self: center;
  color: ${theme.errorColor};
  padding: 1rem 0;
`;

const Label = styled.label`
  margin-top: 1.5rem;
  font-size: 1.4rem;
`;

const ButtonSubmit = styled.button`
  background: ${theme.basicBg};
  border: ${theme.borderBasic};
  border-radius: ${theme.borderRadius};
  height: 3rem;
  width: 7rem;
  margin-top: 2rem;
  align-self: flex-end;
  cursor: pointer;
`;

const TextareaContent = styled.textarea`
  background: ${theme.basicBg};
  border: ${theme.borderBasic};
  border-radius: ${theme.borderRadius};
  padding: 1rem;
  min-height: 18rem;
  max-width: 57.5vw;
  margin-top: 2rem;
  font-size: 1.2rem;
  ::-webkit-input-placeholder {
    color: #e91d1d;
  }
`;

const InputText = styled.input`
  background: ${theme.basicBg};
  border: ${theme.borderBasic};
  border-radius: ${theme.borderRadius};
  padding: 0.5rem 1rem;
  height: 2rem;
  font-size: 1.3rem;
  ::-webkit-input-placeholder {
    color: #e91d1d;
  }
`;

const DivPostManager = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

// inspiration: https://gist.github.com/6174/6062387#file-random-string
const randomID = () => Math.random().toString(36).substr(2, 15);

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

  return (
    <DivPostManager>
      <DivErrorInfo>{error}</DivErrorInfo>
      <Label htmlFor="title">Title</Label>
      <InputText
        placeholder={error}
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label htmlFor="author">Author</Label>
      <InputText
        placeholder={error}
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <TextareaContent
        placeholder={error}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ButtonSubmit onClick={handleSubmit}>Submit</ButtonSubmit>
    </DivPostManager>
  );
};
