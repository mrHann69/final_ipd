import "./AppBookingList.css";
import CardList from "./CardList";

import { deleteFlightsReservations, updateFlightsReservations } from "../../services/flight.service";
import { deleteHotelsReservations, updateHotelsReservations } from "../../services/hotel.service";


function AppBookingList({ list, setListFlights,setListHotels, setIsUpdate, type }) {

  const deleteReservation = async (index) => {
    const r = list.at(index);
    if (!r) return;
    if (type === "hotel"){
      await deleteHotelsReservations(r.id)
      setListHotels(list.filter(it=>r.id !== it.id))
    }else{
      await deleteFlightsReservations(r.id)
      setListFlights(list.filter(it=>r.id !== it.id))
    }
  }

  const editeReservation = async (index) => {
    //console.log("editado",index)
    const r = list.at(index);
    //console.log("rrrrrrEDITETE1: ",r)
    if (!r) return;
    setIsUpdate({
      state: true,
      booking: r,
      type
    })
    //console.log("rrrrrrEDITETE2: ",r)
    if (type === "hotel"){
      await updateHotelsReservations(r.id)
      //setIsUpdate(list.splice(index, 1, "new"))
      setIsUpdate(list.toSpliced(index, 0, r))
    }else{
      await updateHotelsReservations(r.id)
      //setIsUpdate(list.splice(index, 1, "new"))
      setIsUpdate(list.toSpliced(index, 0, r))
    }
  }

  return (
    <div className="list-container">
      <header>
        <h1>{type === "hotel" ? "Hotel " : "Flight "}Booking list</h1>
      </header>
      <div className="scroll-box">
        {list &&
          list.map((booking, index) => (
            <CardList
              key={index}
              booking={booking}
              removeComp={() => deleteReservation(index)}
              editeReservation={() => editeReservation(index)}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}

export default AppBookingList;
