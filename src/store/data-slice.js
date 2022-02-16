import { createSlice } from "@reduxjs/toolkit";

import { getNewListKey, getNewTodoKey } from "../components/helpers";

const todoListDataSlice = createSlice({
  name: "todoListData",
  initialState: {},
  reducers: {
    addTodoList(state) {
      const listKey = getNewListKey();
      const newTodoList = {
        lid: listKey,
        title: `Todo List #${listKey}`,
        lastUpdated: new Date(),
        todos: {},
      };
      state[listKey] = newTodoList;
    },
    deleteTodoList(state, action) {
      const lid = action.payload.lid;
      delete state[lid];
    },
    editTitle(state, action) {
      const lid = action.payload.lid;
      const title = action.payload.title;

      state[lid].title = title;
      state[lid].lastUpdated = new Date();
    },

    addTodo(state, action) {
      const tid = getNewTodoKey();
      const lid = action.payload.lid;
      const value = action.payload.todoText;
      const lastUpdated = new Date();
      const newTodo = {
        tid,
        value,
        checked: false,
        lastUpdated,
      };

      state[lid].todos[tid] = newTodo;
      state[lid].lastUpdated = lastUpdated;
    },
    deleteTodo(state, action) {
      const lid = action.payload.lid;
      const tid = action.payload.tid;

      delete state[lid].todos[tid];
    },
    editTodo(state, action) {
      const lid = action.payload.lid;
      const tid = action.payload.tid;
      const checked = action.payload.checked;
      const todoText = action.payload.todoText;
      const lastUpdated = new Date();

      if (checked !== undefined) {
        state[lid].todos[tid].checked = checked;
      }
      if (todoText !== undefined) {
        state[lid].todos[tid].value = todoText;
        state[lid].todos[tid].lastUpdated = lastUpdated;
        state[lid].lastUpdated = lastUpdated;
      }
    },
  },
});

export const todoListDataActions = todoListDataSlice.actions;

export default todoListDataSlice;
