import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { FaSistrix } from "react-icons/fa6";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={css.searchBox}>
            <label htmlFor="search">Find contacts by name</label>
            <input
                type="text"
                id="search"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
                className={css.input}
            />
            <FaSistrix className={css.icon} />
        </div>
    );
};

export default SearchBox;