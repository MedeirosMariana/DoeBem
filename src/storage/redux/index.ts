import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { UnknownAction } from "redux";
import { IReduxStore } from "./types";

const persistConfig = {
  key: 'DoeBem',
  storage,
  whitelist: ['UserProfile', 'Donation']
}

const combinedReducer = combineReducers({})

const persistedReducer = persistReducer<IReduxStore, UnknownAction>(persistConfig, (combinedReducer as any))

const store = configureStore<ReturnType<typeof persistedReducer>, UnknownAction>({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export class Redux {
  public static readonly getStore = () => store

  public static readonly getPersistor = () => persistor

  public static readonly getState = (): IReduxStore => store.getState()

  public static readonly dispatch = store.dispatch.bind(store)
}
