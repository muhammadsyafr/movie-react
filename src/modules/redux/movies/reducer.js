import actionType from './actionType';

const initialState = {
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_MOVIE:
      return {
        ...state,
        set_movies: action.value
      }
    default:
      return state
  }
}

export default movie;