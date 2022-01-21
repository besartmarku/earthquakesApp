import reducer from "./earthquakes.reducer";
import { EathquakesTypes } from "./earthquakes.types";

const mockData = [
  {
    type: "Feature",
    properties: {
      mag: 1.29,
      magType: "ml",
    },
  },
  {
    type: "Feature",
    properties: {
      mag: 2.29,
      magType: "mb",
    },
  },
  {
    type: "Feature",
    properties: {
      mag: 3.29,
      magType: "mc",
    },
  },
  {
    type: "Feature",
    properties: {
      mag: 4.29,
      magType: "md",
    },
  },
];
// import
test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    loading: false,
    filteredEarthquakesList: [],
    initEarthquakesList: [],
  });
});

test("should handle adding earthquakes list after fetching", () => {
  const previousState = {
    loading: false,
    filteredEarthquakesList: [],
    initEarthquakesList: [],
  };

  const action = {
    type: EathquakesTypes.LOAD_EARTHQUAKES_LIST_SUCCESS,
    payload: {
      filteredEarthquakesList: mockData,
    },
  };
  expect(reducer(previousState, action)).toEqual({
    loading: false,
    filteredEarthquakesList: action.payload.filteredEarthquakesList,
    initEarthquakesList: action.payload.filteredEarthquakesList,
  });
});

test("should handle filtering earthquakes by magtype ml", () => {
  const previousState = {
    loading: false,
    filteredEarthquakesList: mockData,
    initEarthquakesList: mockData,
  };

  const action = {
    type: EathquakesTypes.FILTER_EARTHQUAKES,
    payload: {
      type: "magType",
      value: "ml",
    },
  };
  expect(reducer(previousState, action)).toEqual({
    loading: false,
    filteredEarthquakesList: [
      {
        type: "Feature",
        properties: {
          mag: 1.29,
          magType: "ml",
        },
      },
    ],
    initEarthquakesList: previousState.initEarthquakesList,
  });
});
