import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    // ... put your sagas here,
    // homeScreenSagaWatcher()
  ]);
}
