import "./AppBookingList.css";
import CardList from "./CardList";


function AppBookingList({ list }) {

  return (
    <div className="list-container">
      <header>
        <h1>Booking list</h1>
      </header>
      <div className="scroll-box">
        <ul>
          <div>
            <li>
              {list &&
                list.map((booking, index) => (
                  <CardList booking={booking} />
                ))}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default AppBookingList;
