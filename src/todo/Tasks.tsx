import { Task } from "./Task";
import { TaskProps, TaskType } from "./TaskManager";

export const Tasks = (props: {
  tasks: TaskType[];
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  filterFunc: (task: TaskType) => boolean;
}) => {
  const {
    tasks,
    setCategory,
    setContent,
    editTask,
    deleteTask,
    toggleTask,
    filterFunc,
  } = props;
  return (
    <div>
      {tasks
        .sort((t1, t2) => {
          return t2.dateCreated - t1.dateCreated;
        })
        .sort((t1, t2) => {
          return t1.completed === t2.completed ? 0 : t1.completed ? 1 : -1;
        })
        .map((task) => {
          if (filterFunc(task))
            return (
              <Task
                key={task.id}
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                setCategory={setCategory}
                setContent={setContent}
              />
            );
        })}
    </div>
  );
};
