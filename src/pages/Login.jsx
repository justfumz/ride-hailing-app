import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login({ name: 'Esther', role });
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Login as:</h2>
      <button onClick={() => handleLogin('corporate_hr')} className="btn">
        Corporate HR
      </button>
      <button onClick={() => handleLogin('working_parent')} className="btn">
        Working Parent
      </button>
      <button onClick={() => handleLogin('user')} className="btn">
        General User
      </button>
    </div>
  );
}

export default Login;
