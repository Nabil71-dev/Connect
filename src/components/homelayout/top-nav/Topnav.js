import SearchBar from "./topnav_components/Search_bar";
import Profile from "./topnav_components/Profile";

function Topnav() {
    return (
        <div className="row">
            <div className="col-9">
                <SearchBar />
            </div>
            <div className="col-3">
                <Profile />
            </div>
        </div>
    );
}
export default Topnav;