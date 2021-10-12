import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
// Components
import { FilterButtons } from "./components/FilterButtons";
import { InputForm } from "./components/InputForm";
import { Todo } from "./components/Todo";
// hooks
import { useTaskLocalStorage } from "./hooks/useTaskLocalStorage";

//Styled-components
import "./styles.css";
import { MdDragHandle } from "react-icons/md";

// others
/* We are defining these constants outside our App() function because if they were defined inside it, 
they would be recalculated every time the <App /> component re-renders, and we don’t want that. 
This information will never change no matter what our application does. */
const FILTER_LIST = {
  all: () => true,
  active: (task: TaskType) => !task.completed,
  completed: (task: TaskType) => task.completed,
};

const FILTER_LIST_NAMES = Object.keys(FILTER_LIST);
const randomID = () => Math.random().toString(36).substr(2, 8);

// Props & Types
export type TaskType = {
  id: string;
  taskContent: string;
  completed: boolean;
};
export const TodoApp = () => {
  // hooks:
  // TodoApp
  const [tasks, setTasks] = useTaskLocalStorage("data", [] as TaskType[]);
  const [filter, setFilter] = useState("all");
  // Todo
  // const [isEditing, setEditing] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState("");
  // InputForm
  const [taskContent, setTaskContent] = useState<string>("");
  const [error, setError] = useState("");
  const contentInputFormRef = useRef<any>(null);
  /*There’s one problem however: we can’t just pass the name argument of addTask() into setTasks, because tasks is an array of objects and name is a string. If we tried to do this, the array would be replaced with the string.
  First of all, we need to put name into an object that has the same structure as our existing tasks. Inside of the addTask() function, we will make a newTask object to add to the array. */
  // callbacks
  const addTask = (taskContent: string) => {
    const newTask = {
      id: randomID() /*or use npm nanoid as for exem. id: "todo-"+nanodid() */,
      taskContent: taskContent,
      completed: false,
    };
    setError("");
    //replace ,,space,, with ,,nothing,, to be sure tahat error's set right
    if (taskContent.replace(" ", "") === "") {
      setError("Please, fill the Task");
      return;
    }
    setTasks([...tasks, newTask]);
  };
  // functions *************************************************************************************************************************
  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id: string, newTaskContent: string) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, taskContent: newTaskContent };
      }
      return task;
    });
    setTasks(editedTaskList);
  };
  // handlers:
  // InputForm
  const handleSubmitIF = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(taskContent);
    setTaskContent("");
  };
  const handleChangeIF = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };
  const handleFocusCancel = () => {
    setTaskContent("");
    contentInputFormRef.current?.blur();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmitIF;
    if (e.key === "Escape") handleFocusCancel();
  };
  // general const *****************************************************************************************************************
  const taskList = tasks.filter(FILTER_LIST[filter]).map((task) => (
    <Todo
      key={task.id}
      task={task}
      newTaskContent={newTaskContent}
      setNewTaskContent={setNewTaskContent}
      // taskContent={task.taskContent}
      // completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const filterList = FILTER_LIST_NAMES.map((filterCategory) => (
    <FilterButtons
      key={filterCategory}
      filterCategory={filterCategory}
      isPressed={filterCategory === filter}
      setFilter={setFilter}
    />
  ));
  // number of tasks to complete
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  // Template ***************************************************************************************************************************
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <InputForm
        handleKeyDown={handleKeyDown}
        handleSubmitIF={handleSubmitIF}
        handleChangeIF={handleChangeIF}
        taskContent={taskContent}
        error={error}
        contentInputFormRef={contentInputFormRef}
      />
      <div className="filters btn-group stack-exception"> {filterList} </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
};
