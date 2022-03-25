import SideNav from "./side_nav/SideNav";
import Topnav from "./top-nav/Topnav";
import NotificationAside from "./trending-vacancy/NotifyAside";
import AllPosts from './posts/AllPosts';

const HomeLayout = () => {
    return (
        <div className="d-flex">
            <div className="w-25 me-1">
                <SideNav />
            </div>
            <div className="container">
                <div className="row mt-4">
                    <Topnav />
                    <div className="col-8 mt-3">
                        <AllPosts />
                    </div>
                    <div className="col-4 mt-3">
                        <NotificationAside />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeLayout;