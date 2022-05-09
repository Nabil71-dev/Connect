import { useState } from 'react';
import style from '../../../../styles/post-card.module.css';
import PostModal from '../../post-modal/PostModal';

function Threedot({ props }) {
//console.log(props)
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
        //console.log(props)
        fetch(`http://localhost:8080/post/deletepost`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:props
            })
        })
            .then(response => response.json())
            .then(result => {
                alert(result.message)
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
                        isOpen && <PostModal isOpen={isOpen} closeModal={closeModal} />
                    }
                    <li className="mb-1 me-3" onClick={deleteData}>Delete</li>
                </ul>
            }
        </div>
    );
}

export default Threedot;