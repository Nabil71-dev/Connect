import {useNavigate} from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate();
    //Format all url and go to new one
    const goBack = () => {
        navigate(-1)
    }
    return ( 
        <>
          <h1>Im edit profile</h1>
          <button onClick={goBack}>Go to profile</button>
        </>
     );
}

export default EditProfile;