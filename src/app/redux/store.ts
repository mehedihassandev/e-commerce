import { configureStore, Middleware } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import { createLogger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

/* Redux-Saga */
type RootState = ReturnType<typeof rootReducer>;
type DispatchType = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();
type MiddlewareType = Middleware<any, RootState, Dispatch<AnyAction>>;

const logger: MiddlewareType = createLogger() as Middleware;
const middleware: Middleware[] = [sagaMiddleware, logger];

/* Redux-Persist */

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ---- Redux Store Configuration ---- */

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(middleware),
  devTools: true
});

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { persistor, store };
export type { DispatchType, RootState };
