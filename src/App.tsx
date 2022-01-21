import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadEarthquakes,
  filterEarthuqakes,
} from "./store/earthquakes/earthquakes.actions";
import { RootState } from "./store/store";

import { LoaderContainer, Loader } from "./components/shared/styles";
import SearchInput from "./components/shared/SearchInput";
import ListItem from "./components/shared/ListItem";

function App() {
  const dispatch = useDispatch();

  const {
    earthquakes: { loading, filteredEarthquakesList },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(loadEarthquakes());
  }, []);

  const filterItems = (type: string, value?: string) => {
    dispatch(filterEarthuqakes({ type, value }));
  };

  return (
    <div className="App">
      <SearchInput
        placeholder="Enter Magnitude Value"
        buttonTitle="Search by magnitude"
        type="mag"
        onSearch={filterItems}
      />
      <br />

      <SearchInput
        placeholder="Enter magType Value"
        buttonTitle="Search by magType"
        type="magType"
        onSearch={filterItems}
      />
      <br />

      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : filteredEarthquakesList.length ? (
        filteredEarthquakesList.map((earthquake) => (
          <ListItem
            key={earthquake.id}
            id={earthquake.id}
            place={earthquake.properties.place}
            mag={earthquake.properties.mag}
            magType={earthquake.properties.magType}
          />
        ))
      ) : (
        <h2> No items founds </h2>
      )}
    </div>
  );
}

export default App;
