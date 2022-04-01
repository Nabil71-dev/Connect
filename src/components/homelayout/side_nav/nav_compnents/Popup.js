import { useState,useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/navbar.module.css';

const items = ["Software", "Ai-ML", "distributed-system", "Others"];
const Popup= () => {
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const openPopup = () => {
        setActive(!active);
    }

    //Click outside close feature
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setActive(false);
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, []);

    return (
        <div ref={ref}>
            <h3 className={`${style.dropPosition}`} onClick={openPopup}><FontAwesomeIcon icon={faRectangleList} className="me-2"/>Topic</h3>
            {
                active && <ul className={`${style.dropCard}`}>
                    {items.map((item) => (
                        <li key={Math.random()}> <NavLink to={`/home/${item}`}>{item}</NavLink> </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Popup;