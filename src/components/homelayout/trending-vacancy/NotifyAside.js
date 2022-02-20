import SharePost from "./notifycomponents/SharePost";
import TrendingPost from "./notifycomponents/TopPost";

function NotificationAside() {
    return (
        <>
            <SharePost />
            <TrendingPost toppost={true}/>
            <TrendingPost jobpost={true}/>
        </>
    );
}

export default NotificationAside;