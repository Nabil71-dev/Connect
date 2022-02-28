import TopnavProfile from "./showProfile-components/TopnavProfile";
import UserDetails from "./showProfile-components/UserDetails";
import PostsShare from "./showProfile-components/UserPost_Share";
import UserInfo from "./showProfile-components/UserInfo";

function Profile() {
    return (
        <>
            <div className="col-12 pt-3 alignCenter">
                <TopnavProfile />
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8 ms-5 me-3">
                        <PostsShare />
                    </div>
                    <div className="col-3">
                        <UserDetails />
                        <UserInfo />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Profile;