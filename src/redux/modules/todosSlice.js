import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { waitTwoSeconds } from "../../utils";

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    thunkAPI.dispatch(addTodo(payload));
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {
    const { id } = payload;
    await waitTwoSeconds();
    thunkAPI.dispatch(deleteTodo(id));
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
