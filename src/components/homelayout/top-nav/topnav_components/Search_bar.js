// Yet to implement the card to show that profile and one context to send the data of people

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from "../../../../styles/topnav.module.css";
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchBar() {
    const navigate=useNavigate()
    const [search, setSearch] = useState("")
    const searchpeople = (e) => {
        e.preventDefault();
        navigate(`/home/findpeople/${search}`)
        setSearch("")
    }
    return (
        <div className={`${style.searchContainer} rounded-3 contentBg `}>
            <input onChange={(e) => setSearch(e.target.value)} value={search} className="bg-transparent ms-2" type="search" placeholder=" Search via username" required/>
            <button onClick={searchpeople} className="bg-transparent ms-1" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
}
export default SearchBar;