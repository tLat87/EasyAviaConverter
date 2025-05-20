import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import logReducer from './slices/logSlice';
import vibrationReducer from './slices/vibrationSlice';

const rootReducer = combineReducers({
  log: logReducer,
  vibration: vibrationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
