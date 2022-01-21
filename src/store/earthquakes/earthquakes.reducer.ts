import {
  EarthquakesState,
  StoreActionsType,
  EathquakesTypes,
  EarthquakesLoadedAction,
  EarthquakesFilter,
} from "./earthquakes.types";

const initState: EarthquakesState = {
  loading: false,
  filteredEarthquakesList: [],
  initEarthquakesList: [],
};

const storeReducer = (
  state = initState,
  action: StoreActionsType
): EarthquakesState => {
  switch (action.type) {
    case EathquakesTypes.LOAD_EARTHQUAKES_LIST:
      return { ...state, loading: true };

    case EathquakesTypes.LOAD_EARTHQUAKES_LIST_SUCCESS: {
      const data = (action as EarthquakesLoadedAction).payload;
      return {
        ...state,
        initEarthquakesList: data.filteredEarthquakesList,
        filteredEarthquakesList: data.filteredEarthquakesList,
        loading: false,
      };
    }

    case EathquakesTypes.LOAD_EARTHQUAKES_LIST_ERROR:
      return { ...state, loading: false };

    case EathquakesTypes.FILTER_EARTHQUAKES:
      const { type, value } = (action as EarthquakesFilter).payload;
      return {
        ...state,
        filteredEarthquakesList: value
          ? state.initEarthquakesList.filter(
              (earthquake) => earthquake.properties[type] == value
            )
          : state.initEarthquakesList,
        loading: false,
      };

    default:
      return state;
  }
};

export default storeReducer;
