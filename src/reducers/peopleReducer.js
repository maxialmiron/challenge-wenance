import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  loading: false,
  hasErrors: false,
  peopleList: [],
  filteredPeopleList: [],
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PEOPLE:
      return Object.assign({}, state, {
        loading: true
      })
    case actionTypes.GET_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        peopleList: action.payload.results, loading: false, hasErrors: false
      })
    case actionTypes.GET_PEOPLE_FAILURE:
      return Object.assign({}, state, {
        loading: false, hasErrors: true
      })
    case actionTypes.REMOVE_PEOPLE:
      return Object.assign({}, state, {
        loading: true, hasErrors: false
      })
    case actionTypes.REMOVE_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        peopleList: state.peopleList.filter(element => element !== action.payload), loading: false, hasErrors: false 
      })
    case actionTypes.REMOVE_PEOPLE_FAILURE:
      return Object.assign({}, state, {
        loading: false, hasErrors: true 
      })
    case actionTypes.SEARCH_PEOPLE: {
      return Object.assign({}, state, {
        ...state,
        filteredPeopleList:
          state.peopleList.filter((item) => {
                return item.name.toLowerCase().includes(action.payload.toLowerCase())
             })
      });
    }
    default:
      return state
  }
}
