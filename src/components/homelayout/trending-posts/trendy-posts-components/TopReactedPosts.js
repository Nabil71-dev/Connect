import { faHeart } from '@fortawesome/free-regular-svg-icons';
import TrendingPost from "../../../shared-components/trending-post-comp/TopPost";

const toppost = [
    {
        name: 'Nabil71-dev',
        subject: 'Top rated posts heading',
        icon: faHeart,
        number: 200
    },
]

function TopPosts() {
    return (
        <div className="mt-4">
            <h4>Trending Post</h4>
            {
                toppost && toppost.map(info => <TrendingPost key={Math.random() * 10} props={info} />)
            }
        </div>
    );
}

export default TopPosts;