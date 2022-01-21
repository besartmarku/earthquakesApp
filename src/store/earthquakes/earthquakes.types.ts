export enum EathquakesTypes {
  LOAD_EARTHQUAKES_LIST = "LOAD_EARTHQUAKES_LIST",
  LOAD_EARTHQUAKES_LIST_SUCCESS = "LOAD_EARTHQUAKES_LIST_SUCCESS",
  LOAD_EARTHQUAKES_LIST_ERROR = "LOAD_EARTHQUAKES_LIST_ERROR",
  FILTER_EARTHQUAKES = "FILTER_EARTHQUAKES",
}

export interface EarthquakesState {
  loading: boolean;
  filteredEarthquakesList: Feature[];
  initEarthquakesList: Feature[];
}

export interface Earthquakes {
  type: string;
  metadata: Metadata;
  features: Feature[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface EarthquakesLoadedAction {
  type: string;
  payload: {
    filteredEarthquakesList: Feature[];
  };
}

export interface EarthquakesLoadAction {
  type: string;
}

export interface EarthquakesFilter {
  type: string;
  payload: {
    type: string;
    value: string;
  };
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: null;
  url: string;
  detail: string;
  felt: null;
  cdi: null;
  mmi: null;
  alert: null;
  status: string;
  tsunami: number;
  sig: number;
  net: string;
  code: string;
  ids: string;
  sources: string;
  types: string;
  nst: number;
  dmin: number;
  rms: number;
  gap: number;
  magType: string;
  type: string;
  title: string;
}

export interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}

export type StoreActionsType = EarthquakesLoadAction;
