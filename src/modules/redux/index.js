import { combineReducers, createStore, thunk, applyMiddleware } from "libraries";
import post from './post/reducer';
import profile from './profile/reducer';
import movies from './movies/reducer';

/**
 * reducer
 */
export const reducer = combineReducers({
  post,
  profile,
  movies
})

/**
 * store
 */
export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

/**
 * dispatcher
 */
export * from './post/action';
export * from './profile/action';
export * from './movies/action';
/**
 * selector
 */
export * from './post/selector';
export * from './profile/selector';
export * from './movies/selector';