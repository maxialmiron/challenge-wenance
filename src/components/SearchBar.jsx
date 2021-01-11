import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { searchPeople } from '../actions/peopleAction'
import { makeStyles } from '@material-ui/core';

const SearchBar = ({isActive}) => {
   
  const useStyles = makeStyles(theme => ({
    root: {
      width:"310px", borderRadius: 10, padding:"10px" ,margin:"20px"
    }
  }));

  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const search = (value) => {
    setInput(value);
    isActive(value !== "");
    dispatch(searchPeople(value));
  };
  const classes = useStyles();

  return (
    <input 
      className={classes.root}
      key="search"
      value={input}
      placeholder={"Buscar"}
      onChange={(e) => search(e.target.value)}
    />
  );
}
 
export default SearchBar;