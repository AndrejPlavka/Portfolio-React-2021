import { ReactNode, createContext } from "react";
// import { useLokalStorage } from "./useLokalStorage";

export type TaskType = {
  id: string;
  category: string;
  content: string;
  completed: boolean;
  editable: boolean;
  dateCreated: number;
  dateEdited?: number;
  dateCompleted?: number | null;
};

export type TaskContextProps = {
  tasks: TaskType[];
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  filterTasks: (task: TaskType) => void;
};

const TodoContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = (props: { children: ReactNode }) => {
  //   const [tasks, setTasks] = useLokalStorage([] as PostType[]);

  //   const addOrEditPost = (post: PostType) => {
  //     setTasks((ps) => {
  //       const newPosts = ps.filter((p) => p.id !== post.id);
  //       return [...newPosts, post];
  //     });
  //   };

  //   const deletePost = (id: string) => {
  //     setTasks((ps) => {
  //       return [...ps.filter((post) => post.id !== id)];
  //     });
  //   };

  //   const contextValues = {
  //     tasks,
  //     // addOrEditPost,
  //     // deletePost,
  //   };

  return (
    <div></div>
    // <TodoContext.Provider value={contextValues}>
    //   {props.children}
    // </TodoContext.Provider>
  );
};
