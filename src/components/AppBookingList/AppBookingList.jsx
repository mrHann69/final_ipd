import "./AppBookingList.css";
import CardList from "./CardList";

import { deleteFlightsReservations } from "../../services/flight.service";
import { deleteHotelsReservations } from "../../services/hotel.service";


function AppBookingList({ list, setListFlights,setListHotels, setIsUpdate, type }) {

  const deleteReservation = async (index) => {
    const r = list.at(index);
    if (!r) return;

        console.log("Tipo: ",type)

    if (type === "hotel"){
      await deleteHotelsReservations(r.id)
      setListHotels(list.filter(it=>r.id !== it.id))
    }else{
      await deleteFlightsReservations(r.id)
      setListFlights(list.filter(it=>r.id !== it.id))
    }
    
  }

  function editeReservation(index) {
    //console.log("editado",index)
    const r = list.at(index);
    if (!r) return;
    setIsUpdate({
      state: true,
      booking: r,
      type
    })
  }

  return (
    <div className="list-container">
      <header>
        <h1>Booking list</h1>
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
