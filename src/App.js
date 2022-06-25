//Make all nav-button and login reg form more reusable
//Comment part will be used after completing server
import { Routes, Route } from 'react-router-dom';
import './styles/bootstrap.min.css';
import './styles/global.css';
import Login from './components/login_register/Login';
import Registration from './components/login_register/Registration';
import HomeLayout from './components/homelayout/Layout';
import ProfileLayout from './components/homelayout/profile/Profile_Layout';
import EditProfile from './components/homelayout/profile/profile-component/SetProfile';

import { AuthProvider } from './context/AuthContext';
import RouteVerify from './route-access-verify/RouteVerify';

function App() {
  return (
    <div className="main-bg">
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route element={<RouteVerify />}>
              <Route path="/home/*" element={<HomeLayout />} />
              <Route path="/profile" element={<ProfileLayout />} />
              <Route path="/profile/:mail" element={<ProfileLayout />} />
              <Route path="/editProfile" element={<EditProfile />} />
            </Route>
          </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;