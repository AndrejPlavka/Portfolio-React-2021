import { Helmet } from "react-helmet";
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Tasks } from "./Tasks";
import { useTaskLocalStorage } from "./useTaskLocalStorage";
import React, { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components/macro";

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

export type TaskProps = {
  tasks: TaskType[];
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  filterTasks: (task: TaskType) => void;
};

const randomID = () => Math.random().toString(36).substr(2, 8);

export const TaskManager = () => {
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // const [tasks, setTasks] = useTaskLocalStorage([] as TaskType[]);
  const [tasks, setTasks] = useState([] as TaskType[]);
  const taskInputRefCategory = useRef<HTMLInputElement>(null);
  const taskInputRefContent = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.name === "Category"
      ? setCategory(e.target.value)
      : setContent(e.target.value);
  };

  const handleSubmit = () => {};
  const addTask = () => {
    // const date = new Date();
    const newTask: TaskType = {
      id: randomID(),
      category: category,
      content: content,
      completed: false,
      editable: false,
      dateCreated: Date.now(),
      dateEdited: Date.now(),
      dateCompleted: null,
    };

    setError("");
    //replace ,,space,, with ,,nothing,, to be sure tahat error's set right
    if (category.replace(" ", "") === "") {
      setError("Category is missing");
      return;
    }
    if (content.replace(" ", "") === "") {
      setError("task is missing");
      return;
    }

    setTasks((p) => [...p, newTask]);
    setCategory("");
    setContent("");
    taskInputRefCategory.current?.blur(); //cancel the focus
    taskInputRefContent.current?.blur();
  };

  const deleteTask = (id: string) => {
    setTasks((p) => {
      return p.filter((task) => task.id !== id);
    });
  };
  // zmena - pred tym zapis typu ,,edittask,, (if ... )
  const toggleTask = (id: string) => {
    setTasks((p) => {
      return p.map((task) => {
        return task.id === id
          ? { ...task, completed: !task.completed, dateCompleted: null }
          : { ...task, completed: task.completed, dateCompleted: Date.now() };
      });
    });
  };

  const editTask = (id: string) => {
    // const date = new Date();
    setTasks((p) => {
      return p.map((task) => {
        if (task.id === id) {
          return task.editable
            ? { ...task, editable: false }
            : { ...task, editable: true };
        }
        return task;
      });
    });
  };
  const cancelFocusAndInput = () => {
    setCategory("");
    setContent("");
    taskInputRefCategory.current?.blur();
    taskInputRefContent.current?.blur();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
    if (e.key === "Escape") cancelFocusAndInput();
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addTodo(value);
  //   setValue("");
  // };

  return (
    <Router>
      <Helmet>
        <title>React showcase - Todo App</title>
      </Helmet>
      <DivAppContainer>
        <DivAddTaskBox onKeyDown={handleKeyDown}>
          <InputAddTaskInput
            autoFocus
            autoComplete="off"
            name="Category"
            placeholder={error}
            ref={taskInputRefCategory}
            type="text"
            onChange={handleChange}
            value={category}
          />
          <InputAddTaskInput
            autoComplete="off"
            name="Content"
            placeholder={error}
            ref={taskInputRefContent}
            type="text"
            onChange={handleChange}
            value={content}
          />
          <Button onClick={addTask}>O</Button>
        </DivAddTaskBox>
        <DivTaskFilters>
          <NavLinkStyled to="/todo/all">All</NavLinkStyled>
          <NavLinkStyled to="/todo/active">Active</NavLinkStyled>
          <NavLinkStyled to="/todo/completed">Completed</NavLinkStyled>
        </DivTaskFilters>
        <DivTaskList>
          <Switch>
            <Redirect exact from="/todo" to="/todo/all" />
            <Route exact path="/todo/all">
              <Tasks
                tasks={tasks}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                setCategory={setCategory}
                setContent={setContent}
                filterFunc={() => {
                  return true;
                }}
              />
            </Route>
            <Route exact path="/todo/active">
              <Tasks
                tasks={tasks}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                setCategory={setCategory}
                setContent={setContent}
                filterFunc={(task) => {
                  return !task.completed;
                }}
              />
            </Route>
            <Route exact path="/todo/completed">
              <Tasks
                tasks={tasks}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                setCategory={setCategory}
                setContent={setContent}
                filterFunc={(task) => {
                  return task.completed;
                }}
              />
            </Route>
          </Switch>
        </DivTaskList>
      </DivAppContainer>
    </Router>
  );
};
const NavLinkStyled = styled(NavLink)`
  color: #114068;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2em;
  &.active {
    color: #1d6fb1;
  }
`;

const DivTaskFilters = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DivTaskList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow: auto;
  padding-right: 15px;
`;

const DivAppContainer = styled.div`
  justify-content: center;
  width: 50em;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const InputAddTaskInput = styled.input`
  height: 2em;
  margin: 0;
  width: 100%;
  font-size: 150%;
  color: #114068;
  background: transparent;
  border-radius: 10px;
  border: 6px solid #114068;
  padding: 0 15px;
`;

const DivAddTaskBox = styled.div`
  display: flex;
  margin-bottom: 2em;
`;
