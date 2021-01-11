import * as actionCreators from './actionCreators';

export function fetchPeople() {
  return async dispatch => {
    
    dispatch(actionCreators.getPeople())

    const URL_API_PEOPLE = `https://swapi.dev/api/people/` 
    //"https://run.mocky.io/v3/d6b584e9-90b2-493a-b4d8-beac0be8e3f0"
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