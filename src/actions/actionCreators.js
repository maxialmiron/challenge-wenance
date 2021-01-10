import * as actionTypes from './actionTypes';

export const getPeople = () => ({ type: actionTypes.GET_PEOPLE })

export const getPeopleSuccess = people => ({
  type: actionTypes.GET_PEOPLE_SUCCESS,
  payload: people,
})

export const getPeopleFailure = () => ({ type: actionTypes.GET_PEOPLE_FAILURE })

export const removePeople = () => ({ type: actionTypes.REMOVE_PEOPLE })

export const removePeopleSuccess = people => ({
  type: actionTypes.REMOVE_PEOPLE_SUCCESS,
  payload: people
})

export const removePeopleFailure = () => ({ type: actionTypes.REMOVE_PEOPLE_FAILURE })

export const filterPeople = data => ({
  type: actionTypes.SEARCH_PEOPLE,
  payload: data
})
