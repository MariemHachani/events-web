import { configureStore } from '@reduxjs/toolkit';
import infosSlice from '../features/infosSlice';
import userSlice from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    infos: infosSlice
  },
});
