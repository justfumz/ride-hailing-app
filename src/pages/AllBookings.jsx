import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AllBookings() {
  const { bookings } = useBooking();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !user ||
      (user.role !== 'admin' && user.role !== 'hr' && user.role !== 'school_hr')
    ) {
      navigate('/unauthorized'); // redirect if not allowed
    }
  }, [user, navigate]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Ride Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="border rounded p-4 shadow">
              <p>
                <strong>User:</strong> {b.user} ({b.role})
              </p>
              <p>
                <strong>From:</strong> {b.pickup}
              </p>
              <p>
                <strong>To:</strong> {b.dropoff}
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
      )}
    </div>
  );
}

export default AllBookings;
