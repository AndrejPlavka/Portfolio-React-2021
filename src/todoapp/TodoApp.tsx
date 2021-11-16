import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
// Components
import { FilterButtons } from "./components/FilterButtons";
import { InputForm } from "./components/InputForm";
import { Todo } from "./components/Todo";
// hooks
import { useTaskLocalStorage } from "./hooks/useTaskLocalStorage";

// Styles:
import { theme as todo } from "./theme";
import styled, { keyframes } from "styled-components/macro";

// others
/* We are defining these constants outside our App() function because if they were defined inside it, 
they would be recalculated every time the <App /> component re-renders, and we don’t want that. 
This information will never change no matter what our application does. */
const FILTER_TODO_LIST = {
  all: () => true,
  active: (task: TaskType) => !task.completed,
  done: (task: TaskType) => task.completed,
};

const FILTER_LIST_CATEGORY_NAMES = Object.keys(FILTER_TODO_LIST);
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
  const [isEditing, setEditing] = useState<string>("");
  const [newTaskContent, setNewTaskContent] = useState("");
  // InputForm
  const [taskContent, setTaskContent] = useState("");
  const [error, setError] = useState("");
  const contentInputFormRef = useRef<any>(null);
  /*There’s one problem however: we can’t just pass the name argument of addTask() into setTasks, because tasks is an array of objects and name is a string. If we tried to do this, the array would be replaced with the string.
  First of all, we need to put name into an object that has the same structure as our existing tasks. Inside of the addTask() function, we will make a newTask object to add to the array. */
  // callbacks
  const addTask = () => {
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
    setTasks((p) => {
      return p.map((task) => {
        if (id === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };
  // alternative:
  // const toggleTaskCompleted = (id: string) => {
  //   const updatedTasks = tasks.map((task) => {
  //     if (id === task.id) {
  //       return { ...task, completed: !task.completed };
  //     }
  //     return task;
  //   });
  //   setTasks(updatedTasks);
  // };

  const deleteTask = (id: string) => {
    setTasks((p) => {
      return p.filter((task) => id !== task.id);
    });
  };
  // alternative:
  // const deleteTask = (id: string) => {
  //   const remainingTasks = tasks.filter((task) => id !== task.id);
  //   setTasks(remainingTasks);
  // };
  const editTask = (id: string) => {
    setTasks((p) => {
      return p.map((task) => {
        if (id === task.id) {
          return { ...task, taskContent: newTaskContent };
        }
        return task;
      });
    });
  };
  // alternative:
  // const editTask = (id: string, newTaskContent: string) => {
  //   const editedTaskList = tasks.map((task) => {
  //     if (id === task.id) {
  //       return { ...task, taskContent: newTaskContent };
  //     }
  //     return task;
  //   });
  //   setTasks(editedTaskList);
  // };

  // handlers:
  // InputForm
  const handleSubmitIF = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask();
    setTaskContent("");
  };
  const handleChangeIF = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };
  const handleFocusCancel = () => {
    setTaskContent("");
    contentInputFormRef.current?.blur();
  };
  const handleKeyDownIF = (e) => {
    // if (e.key === "Enter") handleSubmitIF; // not needed - form
    if (e.key === "Escape") handleFocusCancel();
  };

  // Todo
  const handleChangeT = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(e.target.value);
  };
  const handleSubmitT = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    editTask(id);
    setNewTaskContent("");
    setEditing("");
  };
  // general const *****************************************************************************************************************
  // List of tasks
  const taskList = tasks
    .filter(FILTER_TODO_LIST[filter])
    .map((task) => (
      <Todo
        key={task.id}
        task={task}
        newTaskContent={newTaskContent}
        isEditing={isEditing}
        setEditing={setEditing}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        handleSubmitT={handleSubmitT}
        handleChangeT={handleChangeT}
      />
    ));

  // buttons to filter list of tasks (all, active, completed)
  const filterListButtons = FILTER_LIST_CATEGORY_NAMES.map((filterCategory) => (
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
    <DivMain>
      <DivContent>
        <h1>TodoMate</h1>
        <InputForm
          handleKeyDownIF={handleKeyDownIF}
          handleSubmitIF={handleSubmitIF}
          handleChangeIF={handleChangeIF}
          taskContent={taskContent}
          error={error}
          contentInputFormRef={contentInputFormRef}
        />
        <Div>{filterListButtons}</Div>
        <h2 id="list-heading">{headingText}</h2>
        <ul role="list" aria-labelledby="list-heading">
          {taskList}
        </ul>
      </DivContent>
    </DivMain>
  );
};

// Styled components:
const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const DivMain = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${todo.textPrimary};
  background: ${todo.backgroundPrimary};
  animation: 1s ${fadeIn} forwards;
`;
const DivContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 26em;
  width: 100%;
  padding: 5em 3em;
  h1 {
    width: 100%;
    font-size: 2em;
    margin: 0 0 1em;
    text-align: center;
  }
  h2 {
    width: 100%;
    font-size: 1.25em;
    margin: 2em 0 0;
    text-align: left;
    /* text-transform: uppercase; */
  }
  ul {
    list-style: none;
    margin: 0;
    padding: none;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 31%;
    height: 2.5em;
    padding: 0.5em;
    font-size: 1.25em;
    border: none;
    box-shadow: ${todo.shadow_btn2};
    border-radius: 0.15em;
    color: ${todo.textFaded};
    background: ${todo.backgroundPrimary};
    transition: 100ms linear;
    :hover {
      background: ${todo.backgroundSecondary};
      color: ${todo.textSecondary};
    }
    :focus {
      background: ${todo.backgroundSecondary};
      color: ${todo.textSecondary};
    }
  }
`;
