import SideNav from "./side_nav/SideNav";
import style from '../../styles/navbar.module.css';

const Layout = () => {
    return (
        <div className="d-flex">
            <div className={`${style.navContainer}`}>
                <SideNav />
            </div>
            <div>
                {/* <Routes>
                    <Route path="/temp" element={<Temp />} />
                </Routes> */}
            </div>
        </div>
    );
};

export default Layout;