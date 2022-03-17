import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/posts/postslice';
import userReducer from '../features/user/userSlice'
export const store = configureStore({ //create Redux store ,required reducer argument.
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    users: userReducer,
  },
});
