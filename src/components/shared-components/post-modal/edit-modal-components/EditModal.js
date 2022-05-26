import { useState, useEffect } from 'react';
import Selector from '../post-modal-components/Selector';
import style from "../../../../styles/trending_post.module.css"


function Modalform({ closeModal, id }) {
    
    const [header, setHeader] = useState();
    const [post, setPost] = useState();

    const EditPost = (e) => {
        e.preventDefault();

        const form_Data = new FormData(e.target)
        const data = Object.fromEntries(form_Data.entries())

        fetch(`http://localhost:8080/post/updatepost/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                alert(result.message)
                closeModal();
            })
    }

    useEffect(() => {
        fetch(`http://localhost:8080/post/editpost/${id}`)
            .then(response => response.json())
            .then(result => {
                setHeader(result.result[0].post_header)
                setPost(result.result[0].post)
            })
    }, [id])

    return (
        <>
            <form onSubmit={EditPost}>
                <div className="form__group field">
                    <input className="form__field w-100" name="post_header" type="text" placeholder=" Enter post title" value={header ?? ""} onChange={(e) => setHeader(e.target.value)} required />
                    <label htmlFor="post_header" className="form__label"> Enter post title</label>
                </div>
                <Selector /> <br />
                <div className="form__group field">
                    <textarea className={`${style.textArea} form__field w-100`} name="post" placeholder=" Brief post" value={post ?? ""} onChange={(e) => setPost(e.target.value)} required />
                    <label htmlFor="post" className="form__label"> Brief post</label>
                </div>
                <div className="text-center mt-5">
                    <button className="button-main ms-2 me-2" type="submit">Submit</button>
                    <button className="button-main ms-2 me-2" onClick={closeModal}>Close</button>
                </div>
            </form>
        </>
    );
}

export default Modalform;