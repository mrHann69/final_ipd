import "./AppBookingList.css";

function AppBookingList() {
  const bookingList = [
    { customerName: "alex", bookingDate: new Date(), bookingFlight: false },
    { customerName: "alex", bookingDate: new Date(), bookingFlight: false },
    { customerName: "alex", bookingDate: new Date(), bookingFlight: false },
  ];
  return (
    <div>
      <header>
        <h3>Booking list</h3>
      </header>

      <div>
        {bookingList &&
          bookingList.map((booking, index) => (
            <div>
              <h2>{booking.customerName}</h2>
              <h3>{booking.bookingDate.toString()}</h3>
              <button
                className="nav-btn"
                value={"sapa 🐸🐸🐸🐸"}
                onClick={(e) => {
                  console.log(e.target.value);
                }}
              >
                Delete reservation
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AppBookingList;
