import axios from "axios";
import config from "../config.js";

export async function getHotelsReservations() {
  try {
    const URI = config.BACKEND_URI.concat("/hotels");

    const request = await axios.get(URI, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: ❌❌❌❌", response);
    return response;
  } catch (error) {
    console.error("error en axios getHotelsReservations", error);
    throw new Error(error);
  }
}

export async function createHotelsReservations(id, data) {
  try {
    const query = new URLSearchParams();
    query.append("id", id);
    const URI = config.BACKEND_URI.concat("/hotel");
    URI.concat(`?${query.toString()}`);

    const request = await axios.post(URI, data, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: 🚀🚀🚀", response);
    return response;
  } catch (error) {
    console.error("error en axios createHotelsReservations", error);
    throw new Error(error);
  }
}
