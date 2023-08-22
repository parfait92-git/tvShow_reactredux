import React, { useState } from 'react';
import s from './SearchBar.module.css'
import { Search as SearchIcon } from 'react-bootstrap-icons'

export const SearchBar = ({onSubmit}) => {
    const [title, setTitle] = useState("");
    const submit = (e) => {
        if(e.key=== "Enter" && e.target.value.trim() !== 0) {
                onSubmit(e.target.value)
        }
    }
    return (
        <>
        <SearchIcon onClick={() => onSubmit(title)} className={s.icon} size={27}/>
        <input type="text" onKeyUp={submit} onChange={(e)=> setTitle(e.target.value)} placeholder='Search a tv you may like' className={s.input} />
        </>
    )
}