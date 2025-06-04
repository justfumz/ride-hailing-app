import { useBooking } from '../context/BookingContext';

function MyRides() {
  const { bookings } = useBooking();

  if (bookings.length === 0) {
    return <div className="p-6">No rides booked yet.</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">My Ride History</h2>
      {bookings.map((b) => (
        <div key={b.id} className="border rounded p-4 shadow">
          <p>
            <strong>From:</strong> {b.pickup}
          </p>
          <p>
            <strong>To:</strong> {b.dropoff}
          </p>
          <p>
            <strong>Booked by:</strong> {b.user} ({b.role})
          </p>
          <p>
            <strong>Status:</strong> {b.status}
          </p>
          <p>
            <small>{b.time}</small>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyRides;
