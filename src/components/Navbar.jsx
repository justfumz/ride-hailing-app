import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear context + localStorage
    navigate('/login'); // redirect to login
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="font-bold text-lg">RideXpress</div>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/book" className="text-gray-700 hover:text-blue-600">
          Book a Ride
        </Link>
        <Link to="/my-rides" className="text-gray-700 hover:text-blue-600">
          My Rides
        </Link>

        {(user?.role === 'admin' ||
          user?.role === 'hr' ||
          user?.role === 'school_hr') && (
          <Link
            to="/all-bookings"
            className="text-gray-700 hover:text-blue-600"
          >
            All Bookings
          </Link>
        )}

        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
