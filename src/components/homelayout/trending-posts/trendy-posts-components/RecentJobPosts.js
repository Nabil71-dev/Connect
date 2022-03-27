import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TrendingPost from "../../../shared-components/trending-post-comp/TopPost";

const jobpost = [
    {
        name: 'Nabil71-dev',
        subject: 'Recent jon post',
        icon: faSearch,
        number: 2
    },
]

function RecentJobs() {
    return (
        <div className="mt-4">
            <h4>Recent Job</h4>
            {
                jobpost && jobpost.map(info => <TrendingPost key={Math.random() * 10} props={info} />)
            }
        </div>
    );
}

export default RecentJobs;