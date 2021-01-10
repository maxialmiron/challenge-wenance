import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { searchPeople } from '../actions/peopleAction'

const SearchBar = ({isActive}) => {
   
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const search = (value) => {
    setInput(value);
    isActive(value !== "");
    dispatch(searchPeople(value));
  };
    
  return (
    <input 
      style={BarStyling}
      key="search"
      value={input}
      placeholder={"Buscar"}
      onChange={(e) => search(e.target.value)}
    />
  );
}
 
export default SearchBar;