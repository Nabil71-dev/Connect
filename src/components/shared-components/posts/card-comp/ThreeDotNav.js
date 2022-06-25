import { useState } from 'react';
import style from '../../../../styles/post-card.module.css';
import PostModal from '../../post-modal/PostModal';
import { useApi } from '../../../../custom_hooks/fetchData/useApi';
function Threedot({ id }) {

    const { state, dispatch } = useApi()
    const [edit, toggleEdit] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const handleEdit = () => {
        toggleEdit(!edit);
    }

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

    const deleteData = () => {
        fetch(`http://localhost:8080/post/deletepost`, {
            method: 'DELETE',
            headers: {
                'authorization':`Bearer ${sessionStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        }).then(response => response.json())
            .then(response => {
                const result = state?.data?.result.filter((post) => {
                    return post.id !== id;
                });
                const data = {
                    result
                }
                dispatch({ type: 'SUCCESS', result: data })
                alert(response.message)
            })
    }

    return (
        <div className="position-relative">
            <svg onClick={handleEdit} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${style.dropPosition} bi bi-three-dots`} viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            {
                edit && <ul className={`${style.dropCard} position-absolute`}>
                    <li className="mt-1 me-3" onClick={openModal}>Edit</li>
                    {
                        isOpen && <PostModal type={id} isOpen={isOpen} closeModal={closeModal} />
                    }
                    <li className="mb-1 me-3" onClick={deleteData}>Delete</li>
                </ul>
            }
        </div>
    );
}

export default Threedot;