import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import CorporateHR from './pages/dashboard/CorporateHR';
import WorkingParent from './pages/dashboard/WorkingParent';
import GeneralUser from './pages/dashboard/GeneralUser';
import ProtectedRoute from './components/ProtectedRoute';
import MyRides from './pages/MyRides';
import AllBookings from './pages/AllBookings';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/corporate_hr"
          element={
            <ProtectedRoute allowedRole="corporate_hr">
              <CorporateHR />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/working_parent"
          element={
            <ProtectedRoute allowedRole="working_parent">
              <WorkingParent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/user"
          element={
            <ProtectedRoute allowedRole="user">
              <GeneralUser />
            </ProtectedRoute>
          }
        />
        <Route path="/my-rides" element={<MyRides />} />
        <Route path="/all-bookings" element={<AllBookings />} />
        <Route
          path="/unauthorized"
          element={<div className="p-6 text-red-500">Unauthorized Access</div>}
        />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
