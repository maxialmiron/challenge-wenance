import * as actionCreators from './actionCreators';

export function fetchPeople() {
  return async dispatch => {
    
    dispatch(actionCreators.getPeople())

    const URL_API_PEOPLE = `https://swapi.dev/api/people/` 
    
    try {
      const response = await fetch(URL_API_PEOPLE)
      const data = await response.json()
      dispatch(actionCreators.getPeopleSuccess(data))
    } catch (error) {
      dispatch(actionCreators.getPeopleFailure())
    }
  }
}

export function removePeople(id) {
  return async dispatch => {
    
    dispatch(actionCreators.removePeople())

    try {
      dispatch(actionCreators.removePeopleSuccess(id))
    } catch (error) {
      dispatch(actionCreators.removePeopleFailure())
    }
  }
}

export function searchPeople(data) {
  return async (dispatch) => {
    dispatch(actionCreators.filterPeople(data))
  };
}