import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Selector from './Selector';
import style from "../../../../styles/trending_post.module.css"

function Modalform({ closeModal }) {

    const [file, setFile] = useState(null);
    const [formimg, setFromimg] = useState({});
    const [formdata, setFromdata] = useState({});

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

            setFromimg(formData)
        }
        else {
            const formData = new FormData(e.target)
            const data = Object.fromEntries(formData.entries())
            formData.append('post_header', data.post_header);
            formData.append('post_topic', data.post_topic);
            formData.append('post', data.post);
            formData.append('usermail', sessionStorage.getItem('currentuser'));
            formData.append('date', date.toLocaleString());
            formData.append('id', uuidv4());

            setFromdata(formData)
        }
    }

    useEffect(() => {
        fetch(`http://localhost:8080/post/addpostimg`, {
            method: 'POST',
            body: formimg
        })
            .then(response => response.json())
            .then(result => {
                alert(result.message)
                closeModal();
            })
    }, [formimg])

    useEffect(() => {
        fetch(`http://localhost:8080/post/addpostnoimg`, {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json())
            .then(result => {
                alert(result.message)
                closeModal();
            })
    }, [formdata])

    return (
            <form onSubmit={postData}>
                <input className="w-100 input-field" name="post_header" type="text" placeholder=" Enter post title" required /> <br />
                <Selector /> <br />
                <textarea className={`${style.textArea} w-100 input-field mb-3`} name="post" placeholder=" Brief post" required /> <br />
                <input onChange={handlePicChange} className="input-field" name="post_pic" type="file" />
                <div className="text-center mt-5">
                    <button className="button-main ms-2 me-2" type="submit">Submit</button>
                    <button className="button-main ms-2 me-2" onClick={closeModal}>Close</button>
                </div>
            </form>
    );
}

export default Modalform;