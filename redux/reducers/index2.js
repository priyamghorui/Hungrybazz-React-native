import {createSlice} from '@reduxjs/toolkit';
export const storefood = createSlice({
  name: 'storefood',

  initialState: [],
  reducers: {
    addFood: (state, action) => {
      const details = {
        resturontsid: action.payload.resturontsid,
        food_id: action.payload.food_id,
        name: action.payload.name,
        desc: action.payload.desc,
        price: action.payload.price,
        img_uri: action.payload.img_uri,
        addTocart:false,
        tick: false,
      };
      state.push(details);
    },
    deleteDetails: (state, action) => {
      return state.filter(e => e.id !== action.payload.id);
    },
    updateStorefood: (state, action) => {
      const index = state.findIndex(
        details =>
          details.resturontsid === action.payload.resturontsid &&
          details.food_id == action.payload.food_id,
      );
      
      state[index].tick = action.payload.tick;
    },

    updateaddTocart: (state, action) => {
      const index = state.findIndex(
        details =>
          details.resturontsid === action.payload.resturontsid &&
          details.food_id == action.payload.food_id,
      );
      
      state[index].addTocart = action.payload.addTocart;
    },
    deleteAll: (state, action) => {
      return state.filter(e => e.id === action.payload.id);
    },
  },
});

export const {addFood, deleteDetails, updateaddTocart,updateStorefood, deleteAll} =
  storefood.actions;

export default storefood.reducer;
