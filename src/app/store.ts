import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import { saveState, loadState } from './localStorage';
import throttle from 'lodash.throttle';

const store = configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState: loadState()
});

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(
    throttle( () => saveState(store.getState()), 1000)
);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
