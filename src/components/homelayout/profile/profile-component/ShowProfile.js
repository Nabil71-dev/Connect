import ProfileNav from "./show-profile-components/top-nav-profile/ProfileNav";
import UserDetails from "./show-profile-components/user-personal-details/UserDetails";
import PostsShare from "./show-profile-components/user-posts/User_allpost";
import UserInfo from "./show-profile-components/user-personal-details/UserInfo";

function Profile() {
    return (
        <>
            <div className="col-12 pt-3 alignCenter">
                <ProfileNav />
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