import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './project.slice';

export default configureStore({
  reducer: {
    project: projectReducer,
  },
});
