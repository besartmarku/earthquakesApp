/* eslint-disable import/no-cycle */

import { Earthquakes } from "../store/earthquakes/earthquakes.types";
import axios from "./axiosConfig";

const getEarthquakeData = async (): Promise<Earthquakes> => {
  const url = "/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02";
  const { data } = await axios({
    method: "get",
    url,
  });

  return data;
};

export { getEarthquakeData };
