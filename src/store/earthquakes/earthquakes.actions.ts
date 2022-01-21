import {
  EathquakesTypes,
  EarthquakesLoadAction,
  EarthquakesFilter,
} from "./earthquakes.types";

const loadEarthquakes = (): EarthquakesLoadAction => {
  return {
    type: EathquakesTypes.LOAD_EARTHQUAKES_LIST,
  };
};

const filterEarthuqakes = ({ type, value }): EarthquakesFilter => {
  return {
    type: EathquakesTypes.FILTER_EARTHQUAKES,
    payload: { type, value },
  };
};

export { loadEarthquakes, filterEarthuqakes };
