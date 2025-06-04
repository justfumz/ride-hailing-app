import { useEffect, useState } from 'react';

const Confirmation = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const storedBooking = localStorage.getItem('booking');
    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    }
  }, []);

  if (!booking) {
    return (
      <div className="max-w-md mx-auto mt-10 text-center text-gray-500">
        No booking found.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-green-600">
        Booking Confirmed!
      </h2>
      <ul className="text-left space-y-2">
        <li>
          <strong>Pickup:</strong> {booking.pickup}
        </li>
        <li>
          <strong>Dropoff:</strong> {booking.dropoff}
        </li>
        <li>
          <strong>Ride Type:</strong> {booking.rideType}
        </li>
        <li>
          <strong>Date:</strong> {booking.date}
        </li>
        <li>
          <strong>Time:</strong> {booking.time}
        </li>
      </ul>
    </div>
  );
};

export default Confirmation;
