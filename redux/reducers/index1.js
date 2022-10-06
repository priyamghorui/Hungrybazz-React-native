import {createSlice} from '@reduxjs/toolkit';
import {useState} from 'react';

export const values = createSlice({
  name: 'values',

  initialState: [],
  reducers: {
    addValues: (state, action) => {
      console.log('index1-*');
      console.log(state);
      state.map((element, index) => {
        if (element.price == 0) {
          state.splice(0, index);
        }
      });
      let a = 0;
      if (state.length > 0) {
        a = state[state.length - 1].price + action.payload.price;
      } else {
        a = action.payload.price;
      }
      const details = {
        price: a,
      };
      state.push(details);
    },
    deleteAllValues: (state, action) => {
        return state.filter((e) => e.price === action.payload.price);
    },
  },
});

export const {addValues,deleteAllValues} = values.actions;

export default values.reducer;
