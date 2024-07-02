import "./AppBookingList.css";
import CardList from "./CardList";


function AppBookingList({ list, setList }) {

  function deleteted(index) {
    setList(list.splice(index, 1))
  }

  function editeted(index) {
    setList(list.splice(index, 1, list))
  }

  return (
    <div className="list-container">
      <header>
        <h3>Booking list</h3>
      </header>
      <div className="scroll-box">
        {list &&
          list.map((booking, index) => (
            <CardList booking={booking} removeComp={deleteted} index={index} />
          ))}
      </div>
    </div>
  );
}

export default AppBookingList;
