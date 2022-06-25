import  useProfile  from "../../../../custom_hooks/user_data/useProfile";
import { useParams } from "react-router-dom";
import ProfileNav from "./show-profile-components/top-nav-profile/ProfileNav";
import UserDetails from "./show-profile-components/user-personal-details/UserDetails";
import PostsShare from "./show-profile-components/user-posts/User_allpost";
import UserInfo from "./show-profile-components/user-personal-details/UserInfo";
import { DataProvider } from "../../../../custom_hooks/fetchData/useApi";

function Profile() {

    const { mail } = useParams();
    const { state } = useProfile(`http://localhost:8080/user/userprofile/${mail}`);
    const { loading, error, data } = state;

    return (
        <>
            <div className="col-12 pt-3 alignCenter">
                <ProfileNav />
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8 ms-5 me-3">
                        <DataProvider>
                            <PostsShare />
                        </DataProvider>
                    </div>
                        <div className="col-3">
                            {
                                loading && <h3 className="text-center">Loading...</h3>
                            }
                            {
                                data?.result && <>
                                    <UserDetails props={data.result[0]} />
                                    <UserInfo props={data.result[0]} />
                                </>
                            }
                            {
                                !loading && data.message && <div>No data found</div>
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