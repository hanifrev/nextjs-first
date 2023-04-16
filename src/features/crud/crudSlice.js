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
      // const { id, items } = action.payload;
      // const updated = state.map((list) => {
      //   if (list.id === id) {
      //     return { ...list, items };
      //   }
      //   return list;
      // });
      // return updated;
      const { id, items } = action.payload;
      const updated = state.find((item) => item.id === id);
      updated.items = items;
    },
  },
});

export const { addItem, removeItem, updateItem } = crudSlice.actions;

export default crudSlice.reducer;
