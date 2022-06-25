//Must look into this component in V.1.1 ->instant state change n all 
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Selector from './Selector';
import style from '../../../../styles/trending_post.module.css'
function Modalform({ closeModal }) {

    const [file, setFile] = useState(null);

    const handlePicChange = (e) => {
        const info = e.target.files[0];
        setFile(info);
    }

    const postData = (e) => {
        e.preventDefault();
        const date = new Date()

        if (file !== null) {
            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData.entries())

            formData.append('file', file);
            formData.append('post_header', data.post_header);
            formData.append('post_topic', data.post_topic);
            formData.append('post', data.post);
            formData.append('usermail', sessionStorage.getItem('currentuser'));
            formData.append('date', date.toLocaleString());
            formData.append('id', uuidv4());

            fetch(`http://localhost:8080/post/addpostimg`, {
                headers: {
                    'authorization': `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(response => {
                    alert(response.message)
                    //window.location.reload()
                    closeModal();
                })
        }
        else {
            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData.entries())
            delete data.post_pic;

            data.usermail = sessionStorage.getItem('currentuser')
            data.date = date.toLocaleString()
            data.id = uuidv4()

            fetch(`http://localhost:8080/post/addpostnoimg`, {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${sessionStorage.getItem('token')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    alert(result.message)
                    //window.location.reload()
                    closeModal();
                })
        }
    }

    return (
        <form onSubmit={postData}>
            <div className="form__group field">
                <input className="form__field w-100" name="post_header" type="text" placeholder=" Enter post title" required />
                <label htmlFor="post_header" className="form__label"> Enter post title</label>
            </div>
            <Selector /> <br />
            <div className="form__group field">
                <textarea className={`${style.textArea} form__field w-100`} name="post" placeholder=" Brief post" required />
                <label htmlFor="post" className="form__label"> Brief post</label>
            </div>
            <div className="form__group field">
                <input onChange={handlePicChange} className="form__field" name="post_pic" type="file" />
            </div>
            <div className="text-center mt-5">
                <button className="button-main ms-2 me-2" type="submit">Submit</button>
                <button className="button-main ms-2 me-2" onClick={closeModal}>Close</button>
            </div>
        </form>
    );
}

export default Modalform;