import { all, put, StrictEffect, takeEvery, call } from "redux-saga/effects";
import { getEarthquakeData } from "../../api/index";
import { EathquakesTypes } from "./earthquakes.types";

function* loadEarthquakesList() {
  try {
    const data = yield call(getEarthquakeData);

    yield put({
      type: EathquakesTypes.LOAD_EARTHQUAKES_LIST_SUCCESS,
      payload: {
        filteredEarthquakesList: data?.features,
      },
    });
  } catch (error) {
    yield put({
      type: EathquakesTypes.LOAD_EARTHQUAKES_LIST_ERROR,
    });
  }
}

export default function* storesSaga(): Generator<StrictEffect, void> {
  yield all([
    takeEvery(EathquakesTypes.LOAD_EARTHQUAKES_LIST, loadEarthquakesList),
  ]);
}
