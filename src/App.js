//Must do : after front end completion must refactor components
//Make all nav-button and login reg form more reusable


import { Routes, Route } from 'react-router-dom';
import './styles/bootstrap.min.css';
import './styles/global.css';
import Login from './components/login_register/Login';
import Registration from './components/login_register/Registration';
import Layout from './components/homelayout/Layout';
import ProfileLayout from './components/homelayout/profile/Profile_Layout';
import EditProfile from './components/homelayout/profile/profile-component/EditProfile';

function App() {
  return (
    <div className="main-bg">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/*" element={<Layout />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<ProfileLayout />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}
export default App;