import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addItem(state, action) {
      const list = {
        id: nanoid(),
        items: action.payload,
      };
      return [...state, list];
    },
    removeItem(state, action) {
      const deleted = state.filter((item) => item.id !== action.payload);
      return deleted;
    },
    updateItem(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
      });
    },
  },
});

export const { addItem, removeItem, updateItem } = crudSlice.actions;

export default crudSlice.reducer;
