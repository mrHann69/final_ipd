import CardList from "./CardList";

import { deleteFlightsReservations } from "../../services/flight.service";
import { deleteHotelsReservations } from "../../services/hotel.service";
import { AppListContainer, ListContainer } from "./AppBookingListStyles";

function AppBookingList({
  list,
  setListFlights,
  setListHotels,
  setIsUpdate,
  type,
}) {
  const deleteReservation = async (index) => {
    const r = list.at(index);
    if (!r) return;
    if (type === "hotel") {
      await deleteHotelsReservations(r.id);
      setListHotels(list.filter((it) => r.id !== it.id));
    } else {
      await deleteFlightsReservations(r.id);
      setListFlights(list.filter((it) => r.id !== it.id));
    }
  };

  const editeReservation = async (index) => {
    const r = list.at(index);
    if (!r) return;
    setIsUpdate({
      state: true,
      booking: r,
      type,
    });
    return;
  };

  return (
    <AppListContainer>
      <h1>{type === "hotel" ? "Hotel " : "Flight "}Booking list</h1>
      <ListContainer>
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
      </ListContainer>
    </AppListContainer>
  );
}

export default AppBookingList;
