import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function PostReact({ id,react }) {
    const like = (id) => {
        fetch(`http://localhost:8080/post/react/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usermail: sessionStorage.getItem('currentuser')
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => alert("Something went wrong there", err))
    }

    return (
        <>            
            {
               react.includes(sessionStorage.getItem('currentuser')) ? <FontAwesomeIcon className="text-danger cursor" icon={faHeart} /> : <FontAwesomeIcon className="cursor" icon={faHeart} onClick={() => { like(id) }} />
            }
            <label className="ms-2 me-4"> {react?.length} </label>
        </>
    )
}
export default PostReact;