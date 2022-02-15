import { Routes, Route } from 'react-router-dom';
import './styles/bootstrap.min.css';
import './styles/global.css';
import Login from './components/login_register/Login';
import Registration from './components/login_register/Registration';


function App() {
  return (
    <div className="main-bg">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}
export default App;