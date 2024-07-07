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
    console.log(" response: ❌ get Resp H:", response);
    return response;
  } catch (error) {
    console.error("error en axios getHotelsReservations", error);
    throw new Error(error);
  }
}

export async function createHotelsReservations(data) {
  try {    
    const URI = config.BACKEND_URI.concat("/hotel");

    console.log("Hotels URI: ",URI)
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
    console.error("error en axios createHotelsReservations", error);
    throw new Error(error);
  }
}

export async function updateHotelsReservations(id, data) {
  try {
    const query = new URLSearchParams();
    query.append("id", id);
    const URI = config.BACKEND_URI.concat("/hotel");
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
    console.error("error en axios  Update Hotels Reservations", error);
    throw new Error(error);
  }
}

export async function deleteHotelsReservations(id) {
  try {
    const query = new URLSearchParams();
    query.append("id", id);
    const URI = config.BACKEND_URI.concat("/hotel");
    const URL = URI.concat(`?${query.toString()}`);
    
    //console.log("deleteHotelsReservations URI: ",URI)
    //console.log(" query ",URL)

    const request = await axios.delete(URL, {
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await request.data;
    console.log(" response: 🚀 Delete", response);
    return response;
  } catch (error) {
    console.error("error en axios delete Hotels Reservations", error);
    throw new Error(error);
  }
}
