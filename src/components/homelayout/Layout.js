import SideNav from "./side_nav/SideNav";
import style from '../../styles/navbar.module.css';
import Topnav from "./top-nav/Topnav";
import NotificationAside from "./trending-vacancy/NotifyAside";
import AllPosts from './posts/AllPosts';

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
                    <div className="col-8 mt-4">
                        <AllPosts />
                    </div>
                    <div className="col-4 mt-4">
                        <NotificationAside />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Layout;