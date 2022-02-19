import SideNav from "./side_nav/SideNav";
import style from '../../styles/navbar.module.css';
import Topnav from "./top-nav/Topnav";

const Layout = () => {
    return (
        <div className="d-flex">
            <div className={`${style.navContainer}`}>
                <SideNav />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex mt-4">
                        <Topnav />
                    </div>
                    {/* <div className="col-8 border border-primary">
                        
                    </div>
                    <div className="col-4 border border-danger">
                        
                    </div> */}
                </div>
                {/* <Routes>
                    <Route path="/temp" element={<Temp />} />
                </Routes> */}
            </div>
        </div>
    );
};
export default Layout;