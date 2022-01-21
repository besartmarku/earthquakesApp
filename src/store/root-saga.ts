import { all } from "redux-saga/effects";
import earthquakesSaga from "./earthquakes/earthquakes.saga";

export default function* rootSaga(): Generator {
  yield all([earthquakesSaga()]);
}
