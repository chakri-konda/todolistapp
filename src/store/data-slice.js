import { createSlice } from "@reduxjs/toolkit";

import { getNewListKey, getNewTodoKey } from "../components/helpers";

const todoListDataSlice = createSlice({
  name: "todoListData",
  initialState: { data: {} },
  reducers: {
    addTodoList(state) {
      const listKey = getNewListKey();
      const newTodoList = {
        lid: listKey,
        title: `Todo List #${listKey}`,
        lastUpdated: new Date().toString(),
        todos: {},
      };
      state.data[listKey] = newTodoList;
    },
    deleteTodoList(state, action) {
      const lid = action.payload.lid;
      delete state.data[lid];
    },
    editTitle(state, action) {
      const lid = action.payload.lid;
      const title = action.payload.title;

      state.data[lid].title = title;
      state.data[lid].lastUpdated = new Date().toString();
    },

    addTodo(state, action) {
      const tid = getNewTodoKey();
      const lid = action.payload.lid;
      const value = action.payload.todoText;
      const lastUpdated = new Date().toString();
      const newTodo = {
        tid,
        value,
        checked: false,
        lastUpdated,
      };

      state.data[lid].todos[tid] = newTodo;
      state.data[lid].lastUpdated = lastUpdated;
    },
    deleteTodo(state, action) {
      const lid = action.payload.lid;
      const tid = action.payload.tid;

      delete state.data[lid].todos[tid];
    },
    editTodo(state, action) {
      const lid = action.payload.lid;
      const tid = action.payload.tid;
      const checked = action.payload.checked;
      const todoText = action.payload.todoText;
      const lastUpdated = new Date().toString();

      if (checked !== undefined) {
        state.data[lid].todos[tid].checked = checked;
      }
      if (todoText !== undefined) {
        state.data[lid].todos[tid].value = todoText;
        state.data[lid].todos[tid].lastUpdated = lastUpdated;
        state.data[lid].lastUpdated = lastUpdated;
      }
    },
  },
});

export const todoListDataActions = todoListDataSlice.actions;

export default todoListDataSlice;
