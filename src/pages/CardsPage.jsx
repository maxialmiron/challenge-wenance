import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../actions/peopleAction'
import { ErrorView, SearchBar, Loading, CardsList, Notification, NoResults} from '../components'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    "background": "#282c34",
    "display": "flex",
    "flexDirection" : "column",
    "alignItems" : "center",
    "fontSize": "calc(10px + 2vmin)",
  }
}));


const CardsPage = () => {

  const classes = useStyles();
  
  const [isActiveSearchBar, setActiveSearchBar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])
  
  const { peopleList, hasErrors, loading, filteredPeopleList, removedSuccess } = useSelector(
    (state) => state.people,
  );

  const renderElements = () => {
    if (loading) return <Loading/>
    if (hasErrors) return <ErrorView/>
    if (peopleList) {
      return ( 
        <div className={classes.root}>
          <Notification close={removedSuccess}/>
          <SearchBar isActive={(e) => setActiveSearchBar(e)}/>
          <CardsList list={isActiveSearchBar ? filteredPeopleList: peopleList}/>
          {(isActiveSearchBar && filteredPeopleList.length === 0) &&  <NoResults/>} 
        </div>
      )
    }
  }

  return (
    <div>
      {renderElements()}
    </div>
  )
}

export default CardsPage;
