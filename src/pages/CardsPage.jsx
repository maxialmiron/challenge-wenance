import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../actions/peopleAction'
import { ErrorView, SearchBar, Loading, CardsList} from '../components'
import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));


const CardsPage = () => {

  const classes = useStyles();
  
  const [isActiveSearchBar, setActiveSearchBar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople())
  }, [dispatch])
  
  const { peopleList, hasErrors, loading, filteredPeopleList } = useSelector(
    (state) => state.people,
  );

  const renderCards = () => {
    if (loading) return <Loading/>
    if (hasErrors) return <ErrorView/>
    if (peopleList) {
      return ( 
        <div className={classes.root}>
          <SearchBar isActive={(e) => setActiveSearchBar(e)}/>
          <CardsList list={isActiveSearchBar ? filteredPeopleList: peopleList} />
          
        </div>
      )
    }
  }

  return (
    <section>
      {renderCards()}
    </section>
  )
}

export default CardsPage;
