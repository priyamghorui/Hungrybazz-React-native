import { configureStore } from '@reduxjs/toolkit';
import values from './reducers/index1';
import storefood from './reducers/index2';
export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }),
	reducer: {
    values:values,
    storefood:storefood,
	},
  
});