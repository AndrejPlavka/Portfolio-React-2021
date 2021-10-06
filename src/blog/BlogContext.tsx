import { ReactNode, createContext } from "react";
import { useLokalStorage } from "./useLokalStorage";

export type PostType = {
  id: string;
  title: string;
  content: string;
  author: string;
  dateCreated: number;
  dateEdited?: number;
};

type ContextProps = {
  posts: PostType[];
  addOrEditPost: (p: PostType) => void;
  deletePost: (id: string) => void;
};

export const BlogContext = createContext<ContextProps>({} as ContextProps);

export const BlogProvider = (props: { children: ReactNode }) => {
  const [posts, setPosts] = useLokalStorage([] as PostType[]);

  const addOrEditPost = (post: PostType) => {
    setPosts((ps) => {
      const newPosts = ps.filter((p) => p.id !== post.id);
      return [...newPosts, post];
    });
  };

  const deletePost = (id: string) => {
    setPosts((ps) => {
      return [...ps.filter((post) => post.id !== id)];
    });
  };

  const contextValues = {
    posts,
    addOrEditPost,
    deletePost,
  };

  return (
    <BlogContext.Provider value={contextValues}>
      {props.children}
    </BlogContext.Provider>
  );
};
