import "./AppBookingList.css";
import CardList from "./CardList";


function AppBookingList({ list, setList, setIsUpdate, type}) {

  function deleteReservation(index) {
    setList(list.splice(index, 1))
  }

  function editeReservation(index) {
    const r = list.at(index);
    if(!r) return;
    setIsUpdate({
      state: true,
      booking: r,
      type 
    })
  }

  return (
    <div className="list-container">
      <header>
        <h3>Booking list</h3>
      </header>
      <div className="scroll-box">
        {list &&
          list.map((booking, index) => (
            <CardList key={index} booking={booking} removeComp={deleteReservation} editeReservation={editeReservation} index={index} />
          ))}
      </div>
    </div>
  );
}

export default AppBookingList;
