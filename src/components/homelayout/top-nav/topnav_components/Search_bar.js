import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from "../../../../styles/topnav.module.css";

function SearchBar() {
    return (
        <div className={`${style.searchContainer} contentBg `}>
            <input className="bg-transparent" type="search" placeholder=" Search via username" />
            <button className="bg-transparent" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
    );
}
export default SearchBar;