import { useParams } from "react-router-dom";
import ProfileNav from "./show-profile-components/top-nav-profile/ProfileNav";
import UserDetails from "./show-profile-components/user-personal-details/UserDetails";
import PostsShare from "./show-profile-components/user-posts/User_allpost";
import UserInfo from "./show-profile-components/user-personal-details/UserInfo";
import useProfile from '../../../../custom_hooks/profile_load/useProfile';


function Profile() {
    const { mail } = useParams();
    const { state } = useProfile(mail);
    const { loading, error, userprofile } = state;

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
                        {/* <UserDetails /> */}
                        {/* <UserInfo /> */}
                        {
                            loading && <h3 className="text-center">Loading...</h3>
                        }
                        {
                            userprofile.length > 0 && <>
                             <UserDetails props={userprofile} />
                             <UserInfo props={userprofile}/>
                            </>
                        }
                        {
                            !loading && userprofile.length === 0 && <div>No data found</div>
                        }
                        {
                            error && <h3 className="text-center">{error}</h3>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;