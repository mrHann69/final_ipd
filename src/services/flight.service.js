import axios from "axios";
import config from "../config.js";

export async function getFlightsReservations() {
  try {
    const URI = config.BACKEND_URI.concat("/flights");

    const request = await axios.get(URI, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: ❌ Get Resp F: ", response);
    return response;
  } catch (error) {
    console.error("error en axios getFlightsReservations", error);
    throw new Error(error);
  }
}

export async function createFlightsReservations(data) {
  try {    
    const URI = config.BACKEND_URI.concat("/flight");

    console.log("Flights URI: ",URI)
    //console.log(" query ",URL)

    const request = await axios.post(URI, data, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: 🚀 Create", response);
    return response;
  } catch (error) {
    console.error("error en axios createFlightsReservations", error);
    throw new Error(error);
  }
}

export async function updateFlightsReservations(id, data) {
  try {
    const query = new URLSearchParams();
    query.append("id", id);
    const URI = config.BACKEND_URI.concat("/flight");
    const URL = URI.concat(`?${query.toString()}`);

    const request = await axios.patch(URL, data, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: 🚀 Update", response);
    return response;
  } catch (error) {
    console.error("error en axios createFlightsReservations", error);
    throw new Error(error);
  }
}

export async function deleteFlightsReservations(id) {
  try {
    const query = new URLSearchParams();
    query.append("id", id);
    const URI = config.BACKEND_URI.concat("/flight");
    const URL = URI.concat(`?${query.toString()}`);

    const request = await axios.delete(URL, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: 🚀 Delete", response);
    return response;
  } catch (error) {
    console.error("error en axios createFlightsReservations", error);
    throw new Error(error);
  }
}
