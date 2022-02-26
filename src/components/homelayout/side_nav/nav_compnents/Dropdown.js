import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/navbar.module.css';

const items = ["Software", "Ai-ML", "distributed-system", "Others"];
const Dropdown = () => {
    // const ref = useRef(null);
    const [active, setActive] = useState(false);
    const openDropdown = () => {
        setActive(!active);
        console.log(active);
    }

    //Click outside close feature
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (ref.current && !ref.current.contains(event.target)) {
    //         setActive(false);
    //       }
    //     };
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //       document.removeEventListener('click', handleClickOutside, true);
    //     };
    //   }, []);

    return (
        <>
            <h3 className={`${style.dropPosition}`} onClick={openDropdown} ><FontAwesomeIcon icon={faRectangleList} className={style.icon}/>Topic</h3>
            {
                active && <ul /*ref={ref}*/ className={`${style.dropCard}`}>
                    {items.map((item) => (
                        <li key={Math.random()}> <NavLink to={`/home/${item}`}>{item}</NavLink> </li>
                    ))}
                </ul>
            }
        </>
    );
};

export default Dropdown;